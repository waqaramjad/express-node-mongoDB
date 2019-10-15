let mongoose = require('mongoose')
// let database = require('../database')
const server = 'localhost:27017'; 
const database = 'User';      
mongoose.connect(`mongodb://${server}/${database}`)
.then(() => {
  console.log('Database connection successful')
})
.catch(err => {
  console.error('Database connection error')
})
let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
})

module.exports = mongoose.model('User', userSchema)