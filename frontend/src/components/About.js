import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const About = () => {
  const bio = useContext(NoteContext);
  return (
    <div>
      <h1>About</h1>
     </div>
  );
};

export default About;
