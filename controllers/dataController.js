const {update} = require('../models/games')
const Games = require('../models/games')

const dataController = {
    //Index,
    index(req, res, next){
        Games.find({}, (err, foundGame) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.game = deletedGame
                next()
            }
        })
    },
    //Destroy
    destroy(req, res, next){
        Games.findByIdAndDelete(req.params.id, (err, deletedGame) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.game = deletedGame
                next()
            }
        })
    },
    //Update
    update(req, res, next){
        req.body.playedGame = req.body.playedGame === 'on'? true : false;
        Games.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedGame) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.game = updatedGame
                next()
            }
        })
    },
    //Create
    create(req, res, next){
        console.log(req.body)
        req.body.playedGame = req.body.playedGame === 'on'? true : false;
        Games.create(req.body, (err, createdGame)=> {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.game = createdGame
                next()
            }
        })
    },
    //Edit
    //Show
    show(req, res, next){
        Games.findById(req.params.id,(err, foundGames) => {
            if(err){
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