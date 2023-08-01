import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";

export const Home = () => {
  return (
    <div>
      <div className="container my-3">
        <h2>Add Todos</h2>
      </div>
      <div className="container my-3">
        <h2>Your Todos</h2>
      </div>
    </div>
  );
};
