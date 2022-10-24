require('dotenv').config()
//All Require Modules
const express = require('express')
const methodOverride = require('method-override')
const db = require('./models/db')
const app = express()

//Start Config
app.use(express.urlencoded({extended: true})) //This Will give give the app req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})

app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // This Register The Jsx View Engine
db.once('open', () => {
    console.log('The Data Base Is Connected')
});

//Start Middleware
app.use(methodOverride('method'));
app.use(express.static('public'));
app.use('/images', express.static('images'));
app.use('/games', require('./controllers/routeController'));
//End Middleware

// Tell the app to listen on a port
app.listen(3000, () => {
    console.log('Listening on Port 3000')
})
