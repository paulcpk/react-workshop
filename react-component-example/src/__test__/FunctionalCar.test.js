import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Car from "../FunctionalCar";

const CAR_COLOR = "red";

test("renders without crashing", () => {
  render(<Car />);
});

test("renders car with correct text", () => {
  render(<Car color={CAR_COLOR} />);
  const linkElement = screen.getByText(`Hi, I am a ${CAR_COLOR} Car!`);
  expect(linkElement).toBeInTheDocument();
});

// Snapshot test
it("Car renders correctly", () => {
  const tree = renderer.create(<Car color={CAR_COLOR} />).toJSON();
  expect(tree).toMatchSnapshot();
});
