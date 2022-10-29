// const { update } = require('../models/games')
const Games = require('../../models/games')

const dataController = {
  // Index,
  index (req, res, next) {
    Games.find({}, (err, foundGames) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.game = foundGames
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Games.findByIdAndDelete(req.params.id, (err, deletedGames) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.game = deletedGames
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    req.body.playedGame = req.body.playedGame === 'on'
    Games.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedGames) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.game = updatedGames
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    console.log(req.body)
    req.body.playedGame = req.body.playedGame === 'on'
    Games.create(req.body, (err, createdGames) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.game = createdGames
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Games.findById(req.params.id, (err, foundGames) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a Games with that ID'
        })
      } else {
        res.locals.data.games = foundGames
        next()
      }
    })
  }
}
module.exports = dataController
