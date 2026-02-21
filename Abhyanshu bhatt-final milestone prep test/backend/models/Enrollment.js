const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      trim: true
    },
    courseId: {
      type: String,
      required: true,
      ref: "Course"
    },
    enrolledOn: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: false }
);

enrollmentSchema.index({ userId: 1, courseId: 1 }, { unique: true });

module.exports = mongoose.model("Enrollment", enrollmentSchema);
