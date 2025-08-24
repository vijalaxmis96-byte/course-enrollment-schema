const mongoose = require("mongoose");

// --------------------
// Student Schema
// --------------------
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  enrollmentDate: {
    type: Date,
    default: Date.now,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

// --------------------
// Course Schema
// --------------------
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  durationWeeks: {
    type: Number,
    required: [true, "Course duration is required"],
    min: [1, "Duration must be at least 1 week"],
  },
  instructor: {
    type: String,
    required: [true, "Instructor name is required"],
    trim: true,
  },
});

// --------------------
// Models
// --------------------
const Student = mongoose.model("Student", studentSchema);
const Course = mongoose.model("Course", courseSchema);

module.exports = { Student, Course };
