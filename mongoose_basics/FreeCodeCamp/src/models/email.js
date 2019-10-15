let mongoose = require('mongoose')
let validator = require('validator')
const server = 'localhost:27017'; 
const database = 'fcc-Mail';      
mongoose.connect(`mongodb://${server}/${database}`)
.then(() => {
  console.log('Database connection successful')
})
.catch(err => {
  console.error('Database connection error')
})

let emailSchema = new mongoose.Schema({
  email: String
//   {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true,
//     validate: (value) => {
//       return validator.isEmail(value)
//     }
//   }
})

module.exports = mongoose.model('EmailTesting', emailSchema)