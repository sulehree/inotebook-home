import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";
import TodoItem from "./TodoItem";
import AddTodoNote from "./AddTodoNote";
import { useNavigate } from "react-router-dom";

export const TodoNote = (props) => {
  const navigator = useNavigate();
  const { showalert } = props;
  const { todos, loadTodos } = useContext(noteContext);

  useEffect(() => {
    if (localStorage.getItem("Auth_Token")) {
      loadTodos();
    } else {
      navigator("/login");
    }
    // eslint-disable-next-line
  }, []);

  // console.log(todos);

  return (
    <>
      <AddTodoNote showalert={showalert} />
      <div className="row my-3">
        <h2>Your Todos</h2>
        {/* here we will load todo from database */}
        {/* {loadTodos()} */}
        {todos.length === 0 && ` Nothing to Show of Todos`}
        {todos?.map((todo) => {
          return (
            <TodoItem key={todo._id} todoItem={todo} showalert={showalert} />
          );
        })}
      </div>
    </>
  );
};
