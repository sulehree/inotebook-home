const express = require("express");
const router = express.Router();
const permit = require("../../middlewares/").auth;
const controller = require("../../controllers").user;

//@route    GET users
//@desc     current user data
//@access   Private

// router.post("/getalluser", permit, controller.getAllUser);
module.exports = router;
