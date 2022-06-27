const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true
  },
  movieDescription: {
    type: String
  },
  movieGender: {
    type: String
  },
  movieImage: {
    type: String
  },
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = mongoose.model('Movie', Schema)
