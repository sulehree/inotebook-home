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
    res.json(Error.message);
  }
});

//Router :2 // here we will save the note in the mongodb at the endpoint /addnote
router.get(
  "/addnote",
  fetchAuthentincUser,
  // email must be an email
  check("title", "Title minimum length is 5").isLength({ min: 5 }),
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
      const { title, description, tag } = req.body;// refactarization 
      console.log(title, description, tag);
      const note = new Note({
        user:req.user.id,title,description,tag
      })
      const savenote = await note.save()
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
      res.json(Error.message);
    }
  }
);



//Router :3 // here we will update the note in the mongodb at the endpoint /updatenote
router.put(
  "/updatenote:id",
  fetchAuthentincUser,
  // email must be an email
  check("title", "Title minimum length is 5").isLength({ min: 5 }),
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
      const { title, description, tag } = req.body;// refactarization 
      console.log(title, description, tag);
      const note = new Note({
        user:req.user.id,title,description,tag
      })
      const savenote = await note.save()
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
      res.json(Error.message);
    }
  }
);


module.exports = router;
