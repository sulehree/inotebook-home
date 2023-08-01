import noteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const firstState = {
    name: "Abbas",
    class: "16",
  };
  const [first, setfirst] = useState(firstState);
  const update = (Name) => {
    setTimeout(() => {
      setfirst({ name: Name, class: "MSCS" });
    }, 2000);
  };
  return (
    <noteContext.Provider value={{ first, update }}>
      {props.children};
    </noteContext.Provider>
  );
};

export default NoteState;
