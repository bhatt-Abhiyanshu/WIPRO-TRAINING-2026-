const { validationResult } = require("express-validator");

exports.validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      data: errors.array(),
      message: "Validation failed"
    });
  }
  next();
};

exports.notFound = (req, res) => {
  res.status(404).json({
    success: false,
    data: null,
    message: "Route not found"
  });
};

exports.errorHandler = (err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    success: false,
    data: null,
    message: err.message || "Internal Server Error"
  });
};
