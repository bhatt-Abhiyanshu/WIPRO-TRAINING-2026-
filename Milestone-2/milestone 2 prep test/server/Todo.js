const mongoose = require("mongoose")

module.exports = mongoose.model(
  "Todo",
  new mongoose.Schema({
    title: String
  })
)
