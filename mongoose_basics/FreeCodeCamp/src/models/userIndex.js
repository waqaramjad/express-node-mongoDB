let user = require('./user')

let msg = new user({
    firstName: 'String',
    lastName: 'String'
})

msg.save().then((data)=>{
console.log(data)
})