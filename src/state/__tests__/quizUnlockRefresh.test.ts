import { ART_CURRICULUM_VERSION } from "../../../data/artCurriculum";
// Exercise the screen's focus callback with lightweight hook/native mocks.
// Ordinary effects stay idle so quiz generation and unrelated storage are excluded.
let mockStates: unknown[];
let mockStateIndex: number;
let mockFocus: () => (() => void) | undefined;
let mockParams: Record<string, string>;
let mockStoredProgress: string | null;

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useEffect: jest.fn(),
  useRef: (value: unknown) => ({ current: value }),
  useMemo: (callback: () => unknown) => callback(),
  useCallback: jest.fn((callback: unknown) => callback),
  useState: (initial: unknown) => {
    const index = mockStateIndex++;
    if (!(index in mockStates)) mockStates[index] = initial;
    return [mockStates[index], (value: unknown) => { mockStates[index] = value; }];
  },
}));
jest.mock("expo-router", () => ({
  useLocalSearchParams: () => mockParams,
  useRouter: () => ({}),
  useFocusEffect: (callback: typeof mockFocus) => { mockFocus = callback; },
}));
jest.mock("react-native", () => ({
  StyleSheet: { create: (styles: unknown) => styles },
  Pressable: "Pressable", ScrollView: "ScrollView", Text: "Text",
  TextInput: "TextInput", View: "View",
}));
jest.mock("@expo/vector-icons", () => ({ MaterialCommunityIcons: "Icon" }));

jest.mock("../../../data/conceptSets", () => ({ CONCEPT_SETS: {} }));
jest.mock("../../../components/quiz/QuizImage", () => ({ QuizImage: "QuizImage" }));
jest.mock("../useTotalXp", () => ({ useTotalXp: () => 0 }));
jest.mock("../useStreak", () => ({ useStreak: () => 0 }));
jest.mock("@react-native-async-storage/async-storage", () => ({
  __esModule: true,
  default: {
    getItem: jest.fn(async () => mockStoredProgress),
    setItem: jest.fn(async (_key: string, value: string) => { mockStoredProgress = value; }),
  },
}));

type Element = { type: unknown; props: { children?: Element | Element[] | string; disabled?: boolean } };

function quizButtons(element: Element): Element[] {
  const children = element.props.children;
  if (element.type === "Pressable" && children && !Array.isArray(children) &&
      typeof children !== "string" && String(children.props.children).startsWith("Quiz ")) {
    return [element];
  }
  return (Array.isArray(children) ? children : [children]).flatMap((child) =>
    child && typeof child === "object" ? quizButtons(child) : []
  );
}

function savedProgress(variants: string[]) {
  return {
    curriculumVersion: ART_CURRICULUM_VERSION, totalXP: 25, completedParts: {}, streakCount: 2, lastPlayedDate: "2026-10-01",
    completedQuizVariants: { history: { "prehistory-stone-age": { "1": { "1": variants } } } },
  };
}

describe("quiz selection unlock focus refresh", () => {
  let Screen: () => Element;
  let progress: typeof import("../progress");
  let storage: typeof import("@react-native-async-storage/async-storage").default;
  let react: typeof import("react");

  function render() {
    mockStateIndex = 0;
    return quizButtons(Screen());
  }

  async function flushRead() {
    // loadProgress awaits storage before getCompletedQuizVariants resolves.
    await new Promise<void>((resolve) => setImmediate(resolve));
  }

  beforeEach(async () => {
    jest.resetModules();
    mockStates = [];
    mockParams = { topicId: "history", subtopicId: "prehistory-stone-age", levelId: "1", partId: "1" };
    mockStoredProgress = null;
    progress = await import("../progress");
    storage = (await import("@react-native-async-storage/async-storage")).default;
    Screen = (await import("../../../app/topic/[topicId]/subtopic/[subtopicId]/level/[levelId]/[partId]")).default as () => Element;
    react = await import("react");
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => jest.restoreAllMocks());

  it.each([
    [["A"], false, true],
    [["A", "B"], false, false],
    [[], true, true],
    [["B"], true, true],
  ])("refreshes saved %j on focus (B disabled=%s, C disabled=%s)", async (variants, bDisabled, cDisabled) => {
    mockStoredProgress = JSON.stringify(savedProgress(variants as string[]));
    expect(render()).toEqual([]);
    mockFocus();
    await flushRead();
    expect(render().slice(1).map((button) => button.props.disabled)).toEqual([bDisabled, cDisabled]);
    expect(storage.getItem).toHaveBeenCalledWith("quizgame_progress_v2");
    expect(storage.setItem).not.toHaveBeenCalled();
    expect(JSON.parse(mockStoredProgress!)).toEqual(savedProgress(variants as string[]));
  });

  it("keeps B/C locked when no progress is saved", async () => {
    render();
    mockFocus();
    await flushRead();
    expect(render().slice(1).map((button) => button.props.disabled)).toEqual([true, true]);
    expect(storage.setItem).not.toHaveBeenCalled();
  });

  it("reloads after completion while route identifiers stay the same", async () => {
    mockStoredProgress = JSON.stringify(savedProgress([]));
    render();
    const cleanup = mockFocus();
    await flushRead();
    cleanup!();
    await progress.markQuizVariantCompleted("history", "prehistory-stone-age", "1", "1", "A");
    expect(render().slice(1).map((button) => button.props.disabled)).toEqual([true, true]);
    mockFocus();
    await flushRead();
    expect(render().slice(1).map((button) => button.props.disabled)).toEqual([false, true]);
    expect(storage.setItem).toHaveBeenCalledWith("quizgame_progress_v2", JSON.stringify(savedProgress(["A"])));
    await progress.markQuizVariantCompleted("history", "prehistory-stone-age", "1", "1", "B");
    await progress.markQuizVariantCompleted("history", "prehistory-stone-age", "1", "1", "C");
    expect(JSON.parse(mockStoredProgress!).completedQuizVariants.history["prehistory-stone-age"]["1"]["1"]).toEqual(["A", "B", "C"]);
  });

  it.each(["blur/unmount", "scope change"])("ignores a pending read after %s cleanup", async (reason) => {
    let resolveRead!: (variants: string[]) => void;
    const read = jest.spyOn(progress, "getCompletedQuizVariants").mockImplementationOnce(
      () => new Promise((resolve) => { resolveRead = resolve; })
    );
    render();
    const cleanup = mockFocus();
    await flushRead();
    expect(read).toHaveBeenCalledWith("history", "prehistory-stone-age", "1", "1");
    cleanup!();
    if (reason === "scope change") {
      mockParams = { ...mockParams, partId: "2" };
      render();
      mockFocus();
    }
    resolveRead(["A", "B"]);
    await flushRead();
    if (reason === "scope change") {
      expect(render()).toEqual([]); // The new part itself is locked, not merely B/C.
      mockStateIndex = 0;
      expect(JSON.stringify(Screen())).toContain("Complete the preceding parts first.");
    } else expect(render().slice(1).map((button) => button.props.disabled)).toEqual([true, true]);
    expect(react.useCallback).toHaveBeenLastCalledWith(expect.any(Function), [...Object.values(mockParams), mockParams.set]);
  });
});

describe("direct quiz routes enforce admission before generation", () => {
  it.each([
    [{ topicId: "art", subtopicId: "painting", levelId: "1", partId: "1", set: "quizB" }, "Complete Quiz A first."],
    [{ topicId: "art", subtopicId: "painting", levelId: "1", partId: "1", set: "quizC" }, "Complete Quiz A and Quiz B first."],
    [{ topicId: "art", subtopicId: "painting", levelId: "1", partId: "2", set: "quizA" }, "Complete the preceding parts first."],
    [{ topicId: "art", subtopicId: "sculpture", levelId: "2", partId: "1", set: "quizA" }, "Complete the preceding levels first."],
    [{ topicId: "art", subtopicId: "design", levelId: "1", partId: "1", set: "quizA" }, "Coming soon"],
  ])("blocks deep link %j", async (params, reason) => {
    jest.resetModules(); mockStates = []; mockStateIndex = 0; mockParams = params;
    mockStoredProgress = JSON.stringify({ curriculumVersion: ART_CURRICULUM_VERSION, totalXP: 0, streakCount: 0, lastPlayedDate: null, completedParts: {}, completedQuizVariants: {} });
    const module = await import("../../quizEngine/buildQuiz");
    const generation = jest.spyOn(module, "buildQuizResult");
    const Screen = (await import("../../../app/topic/[topicId]/subtopic/[subtopicId]/level/[levelId]/[partId]")).default;
    const react = await import("react");
    (react.useEffect as jest.Mock).mockClear();
    Screen();
    const effects = (react.useEffect as jest.Mock).mock.calls.map(([effect]) => effect as () => unknown);
    effects.forEach(effect => effect());
    mockFocus();
    await new Promise<void>(resolve => setImmediate(resolve));
    mockStateIndex = 0;
    expect(JSON.stringify(Screen())).toContain(reason);
    expect(generation).not.toHaveBeenCalled();
    generation.mockRestore();
  });
});
