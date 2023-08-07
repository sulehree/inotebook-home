const { oldconnectToDB, newconnectToDB } = require("./db");
// oldconnectToDB();
const express = require("express");
newconnectToDB(); // here we connected DataBase

const app = express();
const port = 5000;

app.use(express.json());// as we are passing some values in body in shape of json, we have  to use
// we are making routes

app.use('/auth',require('./routes/auth.route'))
app.use('/notes',require('./routes/notes.routes'))



app.get("/", (req, res) => {
  res.send("Hello Abbas!");
});

app.get("/bilal", (req, res) => {
  res.send("Hello Muhammad Bilal Abbas!");
});

app.listen(port, () => {
  console.log(`My Inotebook app is listening on port ${port}`);
});