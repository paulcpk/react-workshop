import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Btn from "../FunctionalBtn";

const BUTTON_INITIAL_COUNT = 0;

test("renders without crashing", () => {
  render(<Btn />);
});

test("renders Count: 0", () => {
  // preconditions / setup
  render(<Btn />);
  const btnText = screen.getByText(`Count: 0`);
  // assertion
  expect(btnText).toBeInTheDocument();
});

test("does not render Count: 1", () => {
  // preconditions / setup
  render(<Btn />);
  //expect(() => screen.getByText(`Count: 1`)).toThrow();

  const btnText = screen.queryByText(`Count: 1`);
  // assertion
  expect(btnText).not.toBeInTheDocument();
});

// Snapshot test
it("Btn renders correctly", () => {
  const tree = renderer.create(<Btn />).toJSON();
  expect(tree).toMatchSnapshot();
});
