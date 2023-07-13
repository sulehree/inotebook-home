const { oldconnectToDB, newconnectToDB } = require("./db");
// oldconnectToDB();
const express = require("express");
newconnectToDB(); // here we connected DataBase

const app = express();
const port = 3030;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`My Inotebook app is listening on port ${port}`);
});