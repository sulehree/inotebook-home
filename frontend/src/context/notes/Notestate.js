import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const todosArray = [];

  const hostServer = process.env.REACT_APP_HOST_URL;

  const AuthToken = localStorage.getItem("Auth_Token");
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
          "Content-Type": process.env.REACT_APP_CTJSON,
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
    try {
      const apiEndpoint = `notes/addnote`;
      const url = `${hostServer}${apiEndpoint}`;
      console.log(url);
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": process.env.REACT_APP_CTJSON,
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
      // console.log(json);
      loadTodos();
      return json.success;
    } catch (error) {
      console.error(`Adding TODO error: ${error.message}`);
      return false;
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
          "Content-Type": process.env.REACT_APP_CTJSON,
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
      return json.success;
    } catch (error) {
      console.error(`Download error: ${error.message}`);
    }
  };

  //Function Deleting a todo
  const deleteTodo = async (id) => {
    try {
      const apiEndpoint = `notes/deletenote/${id}`;
      const url = `${hostServer}${apiEndpoint}`;
      console.log(url);
      const response = await fetch(url, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": process.env.REACT_APP_CTJSON,
          "auth-token": AuthToken,

          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // body: JSON.stringify(), // body data type must match "Content-Type" header
      });

      const json = await response.json();
      console.log(json);
      loadTodos();
      return json.success;
    } catch (error) {
      console.error(`Download error: ${error.message}`);
      return false;
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
