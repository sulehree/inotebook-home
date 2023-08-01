import React from "react";
import noteContext from "./NoteContext";

const NoteState=(props)=>{
    const state={
        "name":"Abbas",
        "class":"16"

    }
    return(
    <noteContext.Provider value={state}>
        {props.children}; 
    </noteContext.Provider>
    )
}

export default NoteState;