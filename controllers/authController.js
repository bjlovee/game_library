///////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
/// /////////////////////////////////////
// Import Dependencies
/// /////////////////////////////////////
const express = require('express')
const Profile = require('../models/profile')
const bcrypt = require('bcryptjs')

/// //////////////////////////////////////
// Create Route
/// //////////////////////////////////////
const router = express.Router()

/// //////////////////////////////////////
// Routes
/// //////////////////////////////////////

// The SignUp Routes (Get => form, post => submit form)
router.get('/signup', (req, res) => {
  res.render('profile/SignUp.jsx')
})

router.post('/signup', async (req, res) => {
    // encrypt password
    req.body.password = await bcrypt.hash(
      req.body.password,
      await bcrypt.genSalt(10)
    )
    // create the New user
    Profile.create(req.body)
      .then((user) => {
        // redirect to login page
        res.redirect('/profile/login')
      })
      .catch((error) => {
        // send error as json
        console.log(error)
        res.json({ error })
      })
  })

// The login Routes (Get => form, post => submit form)
router.get('/login', (req, res) => {
  res.render('profile/Login.jsx')
})

router.post('/login', async (req, res) => {
    // get the data from the request body
    const { username, password } = req.body
    // search for the user
    Profile.findOne({ username })
      .then(async (profile) => {
        // check if user exists
        if (profile) {
          // compare password
          const result = await bcrypt.compare(password, profile.password)
          if (result) {
            //store some properties in the session object
            req.session.username = username
            req.session.loggedIn = true
            // redirect to fruits page if successful
            res.redirect('/games')
          } else {
            // error if password doesn't match
            res.json({ error: "password doesn't match" })
          }
        } else {
          // send error if user doesn't exist
          res.json({ error: "user doesn't exist" })
        }
      })
      .catch((error) => {
        // send error as json
        console.log(error)
        res.json({ error })
      })
  })

  router.get('/logout', (req, res) => {
    // destroy session and redirect to main page
    req.session.destroy((err) => {
      if (err) {
        console.error(err)
        res.status(500).json(err)
      } else {
        res.redirect('/')
      }    
    })
  })
  
/// ///////////////////////////////////////
// Export the Router
/// ///////////////////////////////////////
module.exports = router