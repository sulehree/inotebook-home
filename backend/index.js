const express = require("express");
const app = express();
const { newconnectToDB } = require("./db");
var server = require("http").Server(app);

newconnectToDB(); // here we connected DataBase

var cors = require("cors");

app.use(cors());
app.use(express.json()); // as we are passing some values in body in shape of json, we have  to use
// we are making routes

var route = require("./routes");
app.use(route);

// app.use("/auth", require("./routes/auth.route"));
// app.use("/notes", require("./routes/notes.routes"));

server.listen(process.env.PORT, () => {
  console.log(`My Inotebook app is listening on port ${process.env.PORT}`);
});
