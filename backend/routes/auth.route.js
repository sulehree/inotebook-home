const express = require("express");
const User= require("../models/users.model")
const router = express.Router(); 
const { check, validationResult } = require("express-validator");
// const app = express();

// this deal  endpoint /auth for html request
router.post(
  "/",
  // email must be an email
  check("name", "minimum lengith is 3").notEmpty().isLength({ min: 3 }),
  // email must be an email
  check("email", "Email Should be in proper format").isEmail(),
  // password must be at least 5 chars long
  check("password").isLength({ min: 5 }),

  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
      console.log(req.body);
    }
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => res.json(user))
      .catch((Error) => {
        console.log(Error);
        res.json(Error);
      });
  }
);

module.exports = router;