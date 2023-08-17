// import AddTodoNote from "./AddTodoNote";
import { TodoNote } from "./TodoNote";

export const Home = (props) => {
  const { showalert } = props;
  return (
    <div>
      {/* <AddTodoNote/> */}
      <TodoNote showalert={showalert} />
    </div>
  );
};
