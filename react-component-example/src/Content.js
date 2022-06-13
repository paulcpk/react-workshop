import FuncCar from "./FunctionalCar";
import ClassCar from "./ClassCar";
import FuncBtn from "./FunctionalBtn";
import ClassBtn from "./ClassBtn";

function Content() {
  return (
    <>
      <p>Here some content</p>
      {/* <FuncCar color="red" maxSpeed={120} weight={1500} />
      <ClassCar color="blue" /> */}
      <FuncBtn />
      <ClassBtn />
    </>
  );
}

export default Content;
