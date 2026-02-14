const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Enrollment = sequelize.define("Enrollment", {});

module.exports = Enrollment;
