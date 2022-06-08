import FunctionCar from './FunctionalCar'
import ClassCar from './ClassCar'
import FuncBtn from './FunctionalBtn'
import ClassBtn from './ClassBtn'
import Mood from './ClassMood'
import Posts from './ClassPosts'


function Content(props) {
  return (
    <section className="app-content">
      <h2>Hello World</h2>
      <Posts />
      <FunctionCar color="red" />
      <ClassCar color="yellow" />
      <FuncBtn />
      <ClassBtn />
      <Mood />
    </section>
  )
}

export default Content
