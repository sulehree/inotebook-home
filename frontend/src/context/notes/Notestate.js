import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const MyData = {
    name: "Abbas",
    class: "Phd Scholar",
  };
  // Here we are using useState for updating the first value
  const [biodata, setBioData] = useState(MyData);
  const updateBio = (Name,studyClass) => {
    setTimeout(() => {
      setBioData({ name: Name, class: studyClass});
    }, 1000);
  };
  return (
    <NoteContext.Provider value={{ biodata, updateBio }}>
      {props.children};
    </NoteContext.Provider>
  );
};

export default NoteState;
