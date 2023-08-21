const express = require("express");
const router = express.Router();

const usersRoutes = require("./users.route");
router.use("/auth", usersRoutes);
// const todoRoutes = require("./todo.route");

module.exports = router;
