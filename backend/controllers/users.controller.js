const express = require("express");
const User = require("../models/users.model");
const router = express.Router();
var bcrypt = require("bcryptjs"); // to hash the password and to store in db
var jwt = require("jsonwebtoken"); // want to create JWT Token
const { validationResult } = require("express-validator");

const JWT_SECRET_TOKEN = process.env.JWT_TOKEN;
let success = false;

const signUp = async (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  try {
    let user = await User.findOne({ email: req.body.email }); // Here i am checking wether this email already exist or not
    if (user) {
      return res.status(400).json({
        success: false,
        error:
          req.body.email +
          " Email is Already Existisng , Choose some other email address",
      }); //if exist .. email id will be shown
    }
    // here i will apply hash on the password
    let salt = bcrypt.genSaltSync(10);
    let hashPassword = await bcrypt.hash(req.body.password, salt);

    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
    });
    //cont tokenExpir=30min
    let data = {
      user: {
        id: user.id,
      },
    };
    const Auth_Token = jwt.sign(data, JWT_SECRET_TOKEN);
    console.log(Auth_Token);
    res.json({ success: true, Auth_Token });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, error: Error.message });
  }
 
};

const login = async (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  const { email, password } = req.body; // defactarizatin of variable into two variables.

  try {
    const user = await User.findOne({ email: email }); // Here i am checking wether this email already exist or not
    if (!user) {
      return res.status(400).json({
        success: false,
        error:
          email + " Email Dont Exist, Check Email and Password are correct",
      });
    } else {
      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(400).json({
          success: false,
          error:
            " Credentials are not Correct, Check Email and Password are correct",
        });
      }
    }

    const data = {
      user: {
        id: user.id,
      },
    };

    const Auth_Token = jwt.sign(data, JWT_SECRET_TOKEN);
    console.log(Auth_Token);
    res.json({ success: true, Auth_Token });
  } catch (error) {
    res.json({ success: false, error: Error.message });
    console.error(error.message);
  }
};

module.exports = {
  signUp,
  login,
};
