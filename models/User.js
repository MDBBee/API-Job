const { required } = require("joi");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a username/name."],
    minLength: 3,
    maxLength: 50,
  },
  emal: {
    type: String,
    required: [true, "Please provide an email."],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email!.",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a valid password!."],
    minLength: 6,
    maxLength: 12,
  },
});

module.exports = mongoose.model("User", UserSchema);
