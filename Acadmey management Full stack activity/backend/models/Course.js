const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Course = sequelize.define("Course", {
  title: DataTypes.STRING,
  fee: DataTypes.INTEGER
});

module.exports = Course;
