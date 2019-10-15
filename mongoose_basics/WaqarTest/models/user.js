let mongoose = require('mongoose')
let DataBase =  require('../database')

// let DataBase1 = DataBase()
let User =  new mongoose.Schema({
    FName : String ,
    LName : String 
})

module.exports = mongoose.model('User' , User)

