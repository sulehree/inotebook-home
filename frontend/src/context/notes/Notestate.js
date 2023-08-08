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
  const hostServer = "http://localhost:5000/";
  const [todos, settodo] = useState(todosArray);

  // to load todos from database
  const loadTodos = async () => {
    console.log("in the loadtodos");

    try {
      const apiEndpoint = "notes/allnotes";
      const url = `${hostServer}${apiEndpoint}`;
      console.log(url);
      const response = await fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMDhjZjNhMDA5YzRiMzg5OTdlOWNkIn0sImlhdCI6MTY5MTM4OTE3MX0.AidoKTVvJNKs6JdaABlNILKLK2AaRIQA5bdmyxmMnqs",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // body: JSON.stringify(), // body data type must match "Content-Type" header
      });

      const json = await response.json();
      console.log(json);
      settodo(json);
    } catch (error) {
      console.error(`Download error: ${error.message}`);
    }
  };

  // Functions to Manipulate with the notes
  //Adding a todo
  const addTodo = async (title, description, tag) => {
    //TODO Api Call
    // const todo = {
    //   _id: "64b634fb4d2f22993d566666",
    //   user: "64b4f8f2969707141857460f",
    //   title: title,
    //   description: description,
    //   tag: tag,
    //   date: "1689662715042",
    // };
    // settodo(todos.concat(todo)); // here push function return the array size after pushing the value and todos is a array, we need array.. not its siize... and concat function return a new array after concating the new value at the end.. this was the reason when we were pusing the value.. and when map function was trying to read it.. it was not an array it bcomes an integer and thats why it was showing error.
    // console.log(title, description, tag);
    console.log("Friends we are adding todo");
    try {
      const apiEndpoint = `notes/addnote`;
      const url = `${hostServer}${apiEndpoint}`;
      console.log(url);
      const response = await fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMDhjZjNhMDA5YzRiMzg5OTdlOWNkIn0sImlhdCI6MTY5MTM4OTE3MX0.AidoKTVvJNKs6JdaABlNILKLK2AaRIQA5bdmyxmMnqs",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          title: title,
          description: description,
          tag: tag,
        }), // body data type must match "Content-Type" header
      });

      const json = await response.json();
      console.log(json);
      settodo(json);
    } catch (error) {
      console.error(`Adding TODO error: ${error.message}`);
    }
  };

  //Function Editing a todo
  const editTodo = async (id) => {
    // console.log(id, "is getting deleted");
    // const newTodos = todos.filter((todo) => {
    //   return todo._id !== id;
    // });
    // settodo(newTodos);

    console.log("in the EditTodo", id);

    try {
      const apiEndpoint = `notes/updatenote/${id}`;
      const url = `${hostServer}${apiEndpoint}`;
      console.log(url);
      const response = await fetch(url, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMDhjZjNhMDA5YzRiMzg5OTdlOWNkIn0sImlhdCI6MTY5MTM4OTE3MX0.AidoKTVvJNKs6JdaABlNILKLK2AaRIQA5bdmyxmMnqs",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          title: "Tinkoo  Warrior",
          description: "Tinkoo War warrior is just a fantasy",
          tag: "minko",
        }), // body data type must match "Content-Type" header
      });

      const json = await response.json();
      console.log(json);
      settodo(json);
    } catch (error) {
      console.error(`Download error: ${error.message}`);
    }
  };

  //Function Deleting a todo
  const deleteTodo = async (id) => {
    // console.log(id, "is getting deleted");
    // const newTodos = todos.filter((todo) => {
    //   return todo._id !== id;
    // });
    // settodo(newTodos);

    console.log("in the Deletetodo");

    try {
      const apiEndpoint = `notes/deletenote/${id}`;
      const url = `${hostServer}${apiEndpoint}`;
      console.log(url);
      const response = await fetch(url, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMDhjZjNhMDA5YzRiMzg5OTdlOWNkIn0sImlhdCI6MTY5MTM4OTE3MX0.AidoKTVvJNKs6JdaABlNILKLK2AaRIQA5bdmyxmMnqs",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // body: JSON.stringify(), // body data type must match "Content-Type" header
      });

      const json = await response.json();
      console.log(json);
      settodo(json);
    } catch (error) {
      console.error(`Download error: ${error.message}`);
    }
  };

  return (
    <NoteContext.Provider
      value={{ todos, addTodo, editTodo, deleteTodo, loadTodos }}
    >
      {props.children};
    </NoteContext.Provider>
  );
};

export default NoteState;
