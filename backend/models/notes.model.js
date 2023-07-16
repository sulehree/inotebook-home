const mongoose = require("mongoose");
const { Schema } = mongoose;

const notesSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, // here i am refrencing another document field here
    ref: "UserSchema" 
  },
  title: {
    type: String,
  },

  description: {
    type: String,
    default: "Here is some Description",
  },

  tag: {
    type: String,
    default: "Genral",
  },

  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("NotesSchema", notesSchema);
