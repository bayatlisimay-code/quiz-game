import { QuizImage } from "../../../components/quiz/QuizImage";
import React from "react";
import type { ReactNode, ReactElement } from "react";
let mockStates: unknown[] = [];
let mockIndex = 0;
let mockCleanup: (() => void) | undefined;
const mockLifecycle = { current: { mounted: true, settled: false } };
jest.mock("react", () => ({ ...jest.requireActual("react"),
  useRef: () => mockLifecycle,
  useEffect: (effect: () => (() => void)) => { mockCleanup = effect(); },
  useState: (initial: unknown) => {
    const i = mockIndex++;
    if (!(i in mockStates)) mockStates[i] = initial;
    return [mockStates[i], (next: unknown) => { mockStates[i] = next; }];
  },
}));
jest.mock("expo-image", () => ({ Image: "ExpoImage" }));
jest.mock("react-native", () => ({ Text: "Text", View: "View", ActivityIndicator: "Spinner", StyleSheet: { create: (v: unknown) => v, absoluteFill: {} } }));
const image = { imageId: "synthetic-image", uri: "https://images.example.invalid/test.jpg", width: 100, height: 100, altText: "Synthetic test image" };
function find(node: ReactNode, type: string): ReactElement<Record<string, unknown>> | undefined {
  if (!React.isValidElement<Record<string, unknown>>(node)) return undefined;
  if (node.type === type) return node;
  return React.Children.toArray(node.props.children as ReactNode).map(child => find(child, type)).find(Boolean);
}
afterEach(() => { mockCleanup?.(); jest.useRealTimers(); });
beforeEach(() => { mockStates = []; mockIndex = 0; mockLifecycle.current = { mounted: true, settled: false }; jest.useFakeTimers(); mockCleanup = undefined; });
test("required image failure displays only the supplied verified fallback", () => {
  const onFailure = jest.fn();
  const element = QuizImage({ image, fallbackText: "Verified authored clue", onFailure });
  const Frame = element.type as (props: typeof element.props) => ReactNode;
  const first = Frame(element.props);
  const error = find(first, "ExpoImage")!.props.onError as () => void;
  error(); mockIndex = 0;
  const next = Frame(element.props);
  expect(find(next, "Text")?.props.children).toBe("Verified authored clue");
  expect(onFailure).not.toHaveBeenCalled();
});
test("image-only failure signals replanning; late callbacks after unmount are ignored", () => {
  const onFailure = jest.fn(), element = QuizImage({ image, onFailure });
  const Frame = element.type as (props: typeof element.props) => ReactNode;
  const first = Frame(element.props);
  const error = find(first, "ExpoImage")!.props.onError as () => void;
  error(); expect(onFailure).toHaveBeenCalledTimes(1);
  mockCleanup!(); error(); expect(onFailure).toHaveBeenCalledTimes(1);
});

test("stalled required images time out to verified fallback without grading an empty stimulus", () => {
  const onFailure = jest.fn(), element = QuizImage({ image, fallbackText: "Verified authored clue", onFailure });
  const Frame = element.type as (props: typeof element.props) => ReactNode;
  Frame(element.props);
  jest.advanceTimersByTime(15000); mockIndex = 0;
  expect(find(Frame(element.props), "Text")?.props.children).toBe("Verified authored clue");
  expect(onFailure).not.toHaveBeenCalled();
});
test("stalled image-only requests signal replanning once; late load/error events cannot undo failure", () => {
  const onFailure = jest.fn(), element = QuizImage({ image, onFailure });
  const Frame = element.type as (props: typeof element.props) => ReactNode;
  const first = Frame(element.props), view = find(first, "ExpoImage")!;
  jest.advanceTimersByTime(15000);
  (view.props.onLoad as () => void)(); (view.props.onError as () => void)();
  expect(onFailure).toHaveBeenCalledTimes(1);
});
test("loaded images preserve contain rendering, source aspect ratio and never time out", () => {
  const onFailure = jest.fn(), element = QuizImage({ image, onFailure });
  const Frame = element.type as (props: typeof element.props) => ReactNode;
  const first = Frame(element.props), view = find(first, "ExpoImage")!;
  expect(view.props.contentFit).toBe("contain");
  (view.props.onLoad as () => void)(); jest.advanceTimersByTime(15000);
  expect(onFailure).not.toHaveBeenCalled();
});
