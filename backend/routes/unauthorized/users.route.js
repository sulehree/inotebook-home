const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const controller = require("../../controllers/users.controller");

router.post(
  "/login",
  check("email", "Email Should be in Proper format").isEmail(),
  // password must be at least 5 chars long
  check("password", "Password is too short ").isLength({ min: 5 }),
  controller.login
);

router.post(
  "/signup",
  check("name", "Minimum length of Name is 3").notEmpty().isLength({ min: 3 }),
  // email must be an email
  check("email", "Email Should be in Proper format").isEmail(),
  // password must be at least 5 chars long
  check(
    "password",
    "Password cant be empty and must be atleast 5 Characters"
  ).isLength({ min: 5 }),
  controller.signUp
);

module.exports = router;
