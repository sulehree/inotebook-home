import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddTodoNote = (props) => {
  const { addTodo } = useContext(NoteContext);
  const { showalert } = props;
  // usestae is being used to store the value of todonote.. and function to change its value
  const [todonote, settodonote] = useState({
    title: "Default Todo:Title",
    description: "Default Todo:Description",
    tag: "Default:Tag",
  });
  const [inputTitle, setinputTitle] = useState("");
  const [inputDesc, setinputDesc] = useState("");
  const [inputTag, setinputtag] = useState("");
  const [titlelabel, settitlelabel] = useState("Todo Title");
  const [desclabel, setdesclabel] = useState("Todo Description");
  const [taglabel, settaglabel] = useState("Todo Tag");
  const handleOnClick = (e) => {
    e.preventDefault();
    // below we aer adding the values for the code
    if (
      inputTitle.length >= 5 &&
      inputDesc.length >= 10 &&
      inputTag.length >= 3
    ) {
      let success = addTodo(todonote.title, todonote.description, todonote.tag);
      if (success) {
        showalert("You have successfully added Todo:", "success");
      } else {
        showalert("You have successfully added Todo:", "danger");
      }

      console.log("button clicked");
      setinputTitle("");
      setinputDesc("");
      setinputtag("");
      settitlelabel("Todo Title");
      setdesclabel("Todo Description");
      settaglabel("Todo Tag");
    } else {
      settitlelabel(
        inputTitle.length < 5 ? "Title Value is less than 5" : "Todo Title"
      );
      setdesclabel(
        inputDesc.length < 10
          ? "Description value is less than 10"
          : "Todo Description"
      );
      settaglabel(
        inputTag.length < 3 ? "Tag value is less than 3" : "Todo Tag"
      );
    }
  };
  // below we are appending the todonote.. that we have created with usestate
  const onchangetitle = (e) => {
    settodonote({ ...todonote, [e.target.name]: e.target.value });
    setinputTitle(e.target.value);
  };
  const onchangeDesc = (e) => {
    settodonote({ ...todonote, [e.target.name]: e.target.value });
    setinputDesc(e.target.value);
  };
  const onchangeTag = (e) => {
    settodonote({ ...todonote, [e.target.name]: e.target.value });
    setinputtag(e.target.value);
  };

  return (
    <div className="container my-3">
      <h2>Add Todos</h2>

      <form>
        <div className="form-group my-2">
          <label htmlFor="todoTitle">{titlelabel}</label>
          <input
            type="text"
            className="form-control border border-primary"
            id="todoTitle"
            name="title"
            placeholder="Enter Title"
            onChange={onchangetitle}
            value={inputTitle} // we have use this function to get the variable value whenever the value get changed in input field
          />
        </div>
        <div className="form-group my-2">
          <label id="titleLabel" htmlFor="todoDescription">
            {desclabel}
          </label>
          <input
            type="text"
            className="form-control border border-primary"
            id="todoDescription"
            name="description"
            placeholder="Enter Description of the todo... "
            onChange={onchangeDesc}
            value={inputDesc}
          />
        </div>
        <div className="form-group my-2">
          <label id="titleLabel" htmlFor="todoTag">
            {taglabel}
          </label>
          <input
            type="text"
            className="form-control border border-primary "
            id="todoTag"
            name="tag"
            placeholder="Enter TAG of the todo... "
            onChange={onchangeTag}
            value={inputTag}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary my-3 "
          onClick={handleOnClick}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodoNote;
