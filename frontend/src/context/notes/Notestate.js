import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const todosArray = [
    {
      _id: "64b634fa4d2f22993d5b5b87",
      user: "64b4f8f2969707141857460f",
      title: "Tracons Devleopers",
      description: "I am working in Tracon ltd..",
      tag: "Office",
      date: "1689662714116",
      __v: 0,
    },
    {
      _id: "64b634fa4d2f22993d5b5b89",
      user: "64b4f8f2969707141857460f",
      title: "Heroshema Developers",
      description: "I am working in HeroSheema ltd..",
      tag: "Office",
      date: "1689662714289",
      __v: 0,
    },
    {
      _id: "64b634fa4d2f22993d5b5b8b",
      user: "64b4f8f2969707141857460f",
      title: "NagaSakiDevelopers",
      description: "I am working in NagaSaki ltd..",
      tag: "Office",
      date: "1689662714842",
      __v: 0,
    },
    {
      _id: "64b634fb4d2f22993d5b5b8d",
      user: "64b4f8f2969707141857460f",
      title: "SheefooDevelopers",
      description: "I am working in Sheefoo ltd..",
      tag: "Office",
      date: "1689662715042",
      __v: 0,
    },
  ];

  const [todos, settodo] = useState(todosArray);

  const loadTodos = async () => {
    const url="";
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  };

  // Functions to Manipulate with the notes
  //Adding a todo
  const addTodo = (title, description, tag) => {
    //TODO Api Call
    const todo = {
      _id: "64b634fb4d2f22993d566666",
      user: "64b4f8f2969707141857460f",
      title: title,
      description: description,
      tag: tag,
      date: "1689662715042",
    };
    settodo(todos.concat(todo)); // here push function return the array size after pushing the value and todos is a array, we need array.. not its siize... and concat function return a new array after concating the new value at the end.. this was the reason when we were pusing the value.. and when map function was trying to read it.. it was not an array it bcomes an integer and thats why it was showing error.
    console.log(title, description, tag);
  };
  //Editing a todo
  const editTodo = () => {};
  //Deleting a todo
  // Delete API Call
  const deleteTodo = (id) => {
    console.log(id, "is getting deleted");
    const newTodos = todos.filter((todo) => {
      return todo._id !== id;
    });
    settodo(newTodos);
  };

  return (
    <NoteContext.Provider value={{ todos, addTodo, editTodo, deleteTodo }}>
      {props.children};
    </NoteContext.Provider>
  );
};

export default NoteState;
