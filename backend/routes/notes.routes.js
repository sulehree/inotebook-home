const User = require("../models/users.model");
const Note = require("../models/notes.model");
const fetchAuthentincUser = require("../middleware/fetchuser.middleware");
const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();

//Router:1// here we get all the notes of the authentic User at the end point /allnotes
router.get("/allnotes", fetchAuthentincUser, async (req, res) => {
  try {
    let userId = req.user.id;
    console.log(userId);
    let notes = await Note.find({ user: userId });

    // this Select will select all other value other then password
    res.json(notes);
  } catch (error) {
    res.json(Error.message);
    console.error(error.message);
  }
});

//Router :2 // here we will save the note in the mongodb at the endpoint /addnote
router.post(
  "/addnote",
  fetchAuthentincUser,
  // email must be an email
  check("title", "Title minimum length is eeedd5").isLength({ min: 5 }),
  // email must be an email
  check("description", "Description minimum length is 10").isLength({
    min: 10,
  }),
  // password must be at least 5 chars long
  check("tag", "Tag minimum length is 3").isLength({ min: 3 }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
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
      res.json(savenote);

      // Another Way to add Note
      // const note = await Note.create({
      //   user: req.user.id,
      //   title: req.body.title,
      //   description: req.body.description,
      //   tag: req.body.tag,
      // });

      // res.json(note);
    } catch (error) {
      res.json(Error.message);
      console.error(error.message);
    }
  }
);

//Router :3 // Here we will update the note in the mongodb at the endpoint /updatenote
router.put("/updatenote/:id", fetchAuthentincUser, async (req, res) => {
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
      return res.status(401).send("Note Not found");
    }
    // req.user.id  // we have got by fethauthentic user
    if (note.user.toString() !== req.user.id) {
      return req.status(401).send("Cheating:You are not a Valid User");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true } // by This option tells Mongoose to return the modified document after the update is applied. By default, Mongoose returns the original document before the update
    );
    res.json({ note });
  } catch (error) {
    res.json(Error.message);
    console.error(error.message);
  }
});

//Router :3 // Here we will update the note in the mongodb at the endpoint /updatenote
router.delete("/deletenote/:id", fetchAuthentincUser, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id); // here we will find th specifiic note.. by the id in the url
    if (!note) {
      return res.status(401).send("Note/Todo Not found");
    }
    // req.user.id  // we have got by fethauthentic user
    if (note.user.toString() !== req.user.id) {
      return req.status(401).send("Cheating:You are not a Valid User");
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ note });
  } catch (error) {
    res.json(Error.message);
    console.error(error.message);
  }
});

module.exports = router;
