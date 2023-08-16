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
  ];
  const hostServer = "http://localhost:5000/";
  const authTokenLaptop =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMWZlNzI5ZWI2MWQ2NzcxMzIyMDZlIn0sImlhdCI6MTY5MTQ4Mzc2Mn0.Aq8AEhQ-6Q8pgVQugAs19SJYrkUZDd5x_qVOpXuH-ns";
  // const authTokenPC =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMDhjZjNhMDA5YzRiMzg5OTdlOWNkIn0sImlhdCI6MTY5MTM4OTE3MX0.AidoKTVvJNKs6JdaABlNILKLK2AaRIQA5bdmyxmMnqs";
  const AuthToken = authTokenLaptop;
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
          "auth-token": AuthToken,
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // body: JSON.stringify(), // body data type must match "Content-Type" header
      });

      const json = await response.json();

      settodo(json);
    } catch (error) {
      console.error(`Download error: ${error.message}`);
    }
  };

  // Functions to Manipulate with the notes
  //Adding a todo
  const addTodo = async (title, description, tag) => {
    console.log("Friends we are adding todo");
    try {
      const apiEndpoint = `notes/addnote`;
      const url = `${hostServer}${apiEndpoint}`;
      console.log(url);
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token": AuthToken,
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
      // settodo(json);
      loadTodos();
    } catch (error) {
      console.error(`Adding TODO error: ${error.message}`);
    }
  };

  //Function Editing a todo
  const editTodo = async (id, title, description, tag) => {
    try {
      const apiEndpoint = `notes/updatenote/${id}`;
      const url = `${hostServer}${apiEndpoint}`;
      console.log(url);
      const response = await fetch(url, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token": AuthToken,
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          title: title,
          description: description,
          tag: tag,
        }), // body data type must match "Content-Type" header
      });

      const json = await response.json();

      loadTodos();
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
          "auth-token": AuthToken,

          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // body: JSON.stringify(), // body data type must match "Content-Type" header
      });

      const json = await response.json();
      console.log(json);
      loadTodos();
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
