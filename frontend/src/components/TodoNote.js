import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";
import TodoItem from "./TodoItem";
import AddTodoNote from "./AddTodoNote";

export const TodoNote = () => {
  const { todos, loadTodos } = useContext(noteContext);
  useEffect(() => {
    // eslint-disable-next-line
    loadTodos();
  }, []);

  console.log(todos);

  // const refetch = () => {
  //   loadTodos();
  // };

  return (
    <>
      <AddTodoNote />
      <div className="row my-3">
        <h2>Your Todos</h2>
        {/* here we will load todo from database */}
        {/* {loadTodos()} */}
        {todos?.map((todo) => {
          return (
            <TodoItem
              key={todo._id}
              todoItem={todo}
              // refetch={refetch}
            />
          );
        })}
      </div>
    </>
  );
};
