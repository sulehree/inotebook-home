import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import TodoItem from "./TodoItem";
import AddTodoNote from "./AddTodoNote";

export const TodoNote = () => {
  const { todos, addTodo } = useContext(noteContext);

  return (
    <>
      <AddTodoNote />
      <div className="row my-3">
        <h2>Your Todos</h2>
        {todos.map((todo) => {
          return <TodoItem key={todo._id} todoItem={todo} />;
        })}
      </div>
    </>
  );
};
