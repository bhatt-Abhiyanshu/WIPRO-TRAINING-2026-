const validator = require("validator");

module.exports = (fields) => {
  return (req, res, next) => {
    for (let field of fields) {
      if (!req.body[field] || validator.isEmpty(String(req.body[field]))) {
        return res.status(400).json({ message: `${field} is required` });
      }
    }
    next();
  };
};
