import React ,{useContext} from "react";
import noteContext from "../context/notes/NoteContext";

const About = () => {
  const b = useContext(noteContext)
  return <div>About US {b.class}</div>;
};

export default About;
