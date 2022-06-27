const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  /*
  username: {
    type: String,
    required: true
  },
  */
  
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('User', Schema)