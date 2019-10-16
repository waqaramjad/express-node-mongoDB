let mongoose = require('mongoose')



let todo = mongoose.Schema({

    
name : String , 
adress : String , 
})

module.exports = mongoose.model('Todo', todo)
