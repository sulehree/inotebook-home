import React,{useContext} from "react";
import NoteContext from "../context/notes/NoteContext";
const TodoItem = (props) => {
  const { deleteTodo, editTodo } = useContext(NoteContext);
  const { title, description, _id } = props.todoItem;
 
  return (
    <div className="col-md-3">
      <div className="card text-white bg-secondary my-3">
        <div className="card-body ">
          <h5 className="card-title ">{title}</h5>
          <p className="card-text  ">{description}</p>
          {/*Delete Button  */}
          <i
            className="bi bi-trash"
            onClick={() => {
              deleteTodo(_id);
              // props.refetch();
            }}
          ></i>
          {/* Edit Button */}
          <i
            className="bi bi-pencil-square mx-3"
            onClick={() => {
              editTodo(_id);
            }}
          >
            {" "}
          </i>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
