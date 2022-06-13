import FuncCar from "./FunctionalCar";
import ClassCar from "./ClassCar";
import FuncBtn from "./FunctionalBtn";
import ClassBtn from "./ClassBtn";
import Posts from "./FunctionalPosts";

function Content() {
  return (
    <>
      <p>Here some content</p>
      <FuncCar color="red" />
      <ClassCar color="blue" />
      <FuncBtn />
      <ClassBtn />
      <Posts />
    </>
  );
}

export default Content;
