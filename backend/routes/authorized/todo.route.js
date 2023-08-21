const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const controller = require("../../controllers").todo;
const permit = require("../../middlewares").auth;

router.get("/allnotes", permit, controller.loadAllTodos);

router.post(
  "/addnote",
  permit,
  // email must be an email
  check("title", "Title minimum length is 5").isLength({ min: 5 }),
  // email must be an email
  check("description", "Description minimum length is 10").isLength({
    min: 10,
  }),
  // password must be at least 5 chars long
  check("tag", "Tag minimum length is 3").isLength({ min: 3 }),
  controller.addTodo
);

router.put("/updatenote/:id", permit, controller.editTodo);

router.delete("/deletenote/:id", permit, controller.deleteTodo);

module.exports = router;
