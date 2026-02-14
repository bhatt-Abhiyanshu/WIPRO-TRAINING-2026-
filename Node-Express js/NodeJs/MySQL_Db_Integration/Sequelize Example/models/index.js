const sequelize =require("../db/connection.js");
const course = require("./course.js");
const instructor = require("./instructor.js");
const Enrollment = require("./Enrollment.js");
const Studentss = require("./Studentss.js");
instructor.hasMany(course)
course.belongsTo(instructor)
Studentss.belongsToMany(course,{through:Enrollment})
course.belongsToMany(Studentss,{through:Enrollment})
module.exports={sequelize,course,instructor,Studentss,Enrollment};