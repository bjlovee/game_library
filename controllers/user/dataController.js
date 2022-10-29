
const Users = require('../../models/user')

const dataController = {
  // Index,
  index (req, res, next) {
    Users.find({}, (err, foundUsers) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.user = foundUsers
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Users.findByIdAndDelete(req.params.id, (err, deletedUsers) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.user = deletedUsers
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    req.body.likeGame = req.body.likeGame === 'on'
    Users.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUsers) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.user = updatedUsers
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    console.log(req.body)
    req.body.likeGame = req.body.likeGame === 'on'
    Users.create(req.body, (err, createdUsers) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.user = createdUsers
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Users.findById(req.params.id, (err, foundUsers) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a Users with that ID'
        })
      } else {
        res.locals.data.users = foundUsers
        next()
      }
    })
  }
}
module.exports = dataController
