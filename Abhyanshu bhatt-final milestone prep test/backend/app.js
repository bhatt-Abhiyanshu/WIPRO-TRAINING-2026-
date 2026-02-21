const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const courseRoutes = require("./routes/courseRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev"));
}

app.use("/api/courses", courseRoutes);
app.use("/api/enroll", enrollmentRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
