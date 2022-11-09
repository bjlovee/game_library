/// ///////////////////////////////////////////
// Import Dependencies
/// ///////////////////////////////////////////
const mongoose = require('mongoose')

/// /////////////////////////////////////////////
// Define Model
/// /////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose

// make profiles schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

// make profile model
const Profile = model('Profile', profileSchema)

/// ////////////////////////////////////////////////
// Export Model
/// ////////////////////////////////////////////////
module.exports = Profile