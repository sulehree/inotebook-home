import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";

export const Home = () => {
  const aVar = useContext(noteContext);

  useEffect(() => {

    aVar.update("Muhamamad Zahid");
    // eslint-disable-next-line

  }, []);

  return (
    <div>
     
      This is my {aVar.first.name} 
     
      
    </div>
  );
};
