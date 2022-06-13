import FuncCar from "./FunctionalCar";
import ClassCar from "./ClassCar";

function Content() {
  return (
    <>
      <p>Here some content</p>
      <FuncCar color="red" />
      <ClassCar color="blue" />
    </>
  );
}

export default Content;
