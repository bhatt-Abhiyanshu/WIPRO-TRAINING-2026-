const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Instructor = sequelize.define("Instructor", {
  name: DataTypes.STRING
});

module.exports = Instructor;
