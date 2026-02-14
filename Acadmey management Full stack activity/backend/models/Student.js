const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Student = sequelize.define("Student", {
  name: DataTypes.STRING
});

module.exports = Student;
