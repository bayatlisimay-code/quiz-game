import { QuizImage } from "../../../components/quiz/QuizImage";
import React from "react";
import type { ReactNode, ReactElement } from "react";
let mockStates: unknown[] = [];
let mockIndex = 0;
let mockCleanup: (() => void) | undefined;
const mockMounted = { current: true };
jest.mock("react", () => ({ ...jest.requireActual("react"),
  useRef: () => mockMounted,
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
beforeEach(() => { mockStates = []; mockIndex = 0; mockMounted.current = true; mockCleanup = undefined; });
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
