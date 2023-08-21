const Note = require("../models/notes.model");
const express = require("express");
const { validationResult } = require("express-validator");
const router = express.Router();
let success = false;

const loadAllTodos = async (req, res) => {
  try {
    let userId = req.user.id;
    let notes = await Note.find({ user: userId });

    // this Select will select all other value other then password

    res.json(notes);
  } catch (error) {
    res.json(Error.message);
    console.error(error.message);
  }
};

const addTodo = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  try {
    console.log(req.user.id);

    // Another Way to add Note
    const { title, description, tag } = req.body; // refactarization
    console.log(title, description, tag);
    const note = new Note({
      user: req.user.id,
      title,
      description,
      tag,
    });
    const savenote = await note.save();
    res.json({ success: true, savenote });
  } catch (error) {
    res.json({ success: true, error: Error.message });
    console.error(error.message);
  }
};

const editTodo = async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    console.log(title, description, tag);
    const newNote = {};
    if (title) {
      newNote.title = title;
    } // here we are checking if title value for updating is given then only update it, otherwise left this field
    if (description) {
      newNote.description = description;
    } // same check whether value is there or not
    if (tag) {
      newNote.tag = tag;
    } // same check whether value is there or not
    // res.json(newNote);

    let note = await Note.findById(req.params.id); // here we will find th specifiic note.. by the id in the url
    if (!note) {
      return res.status(401).json({ success: false, errors: "Note Not found" });
    }
    // req.user.id  // we have got by fethauthentic user
    if (note.user.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ success: false, errors: "Cheating:You are not a Valid User" });
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true } // by This option tells Mongoose to return the modified document after the update is applied. By default, Mongoose returns the original document before the update
    );
    res.json({ success: true, note });
  } catch (error) {
    res.json({ success: false, errors: Error.message });
    console.error(error.message);
  }
};

const deleteTodo = async (req, res) => {
  try {
    let note = await Note.findById(req.params.id); // here we will find th specifiic note.. by the id in the url
    if (!note) {
      return res.status(401).send("Note/Todo Not found");
    }
    // req.user.id  // we have got by fethauthentic user
    if (note.user.toString() !== req.user.id) {
      return req
        .status(401)
        .json({ success: false, errors: "Cheating:You are not a Valid User" });
      // return req.status(401).send("Cheating:You are not a Valid User");
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ success: true, note });
  } catch (error) {
    res.json({ success: false, errors: Error.message });
    console.error(error.message);
  }
};

module.exports = {
  // here we will write the moduels that we will use
  loadAllTodos,
  addTodo,
  editTodo,
  deleteTodo,
};
