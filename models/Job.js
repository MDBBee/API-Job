const { required } = require("joi");
const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide the name of the subject company!"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide the name of the subject position!"],
      maxlength: 150,
    },
    status: {
      type: String,
      enum: ["interview", "decline", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
