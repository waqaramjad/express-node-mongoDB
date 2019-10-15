let user = require('./user')

let UserData = new user({
    FName : 'String' ,
    LName : 'String' 
})
// UserData.save().then((data)=>{
//   console.log(data)  
// }).catch((err)=>{
// console.log(err)
// })

// let data =  user.findById('waqar').then((data)=>{

//     console.log('data',data)
// })


// user.findOneAndUpdate({LName : 'Saad'}, {LName : 'sdfsf',FName : 'sudfuii',HI : 'sdfs',asdf:'asd'}).then((data)=>{
//         console.log('data',data)
    
//     })
//     user.deleteOne({FName : 'waqar'}).then((data)=>{
//             console.log('data',data)
        
//         })
        
        // user.findOne({type:String}).then((data)=>{
        //     console.log('data',data)
        
        // })
        // user.deleteMany({type:String}).then((data)=>{
        //     console.log('data',data)
        
        // })


// console.log(data)
// let data = await user.find()
// .then((data)=>{

    // console.log(data)
// })

// (async function () {
//     let data = await user.find()
//     console.log(data)
// })();

user.findOne({name:'ali'}).select('name adress occup' ).then((data)=>{
        console.log('data',data)
    
    })