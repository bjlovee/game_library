const mongoose = require('mongoose')

// Make A Schema
const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rating: { type: String, required: true },
  image: { type: String, required: false },
  playedGame: Boolean
})

// Make A model From The Schema
const Games = mongoose.model('Games', gameSchema)

// Export The Model For Use In The App
module.exports = Games
