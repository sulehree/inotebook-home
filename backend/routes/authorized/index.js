const express = require("express");
const router = express.Router();

const usersRoutes = require("./users.route");
const todoRoutes = require("./todo.route");

router.use("/auth", usersRoutes);
router.use("/notes", todoRoutes);

module.exports = router;
