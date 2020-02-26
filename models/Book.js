const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    require: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book
