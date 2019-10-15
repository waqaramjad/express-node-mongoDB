let EmailModel = require('./email')

let msg = new EmailModel({
  email: 'ada.lovelace@gmail.com'
})

msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })

//    EmailModel
//   .find({
//     email: 'ada.lovelace@gmail.com'   // search query
//   })
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })


//   EmailModel
//   .findOneAndUpdate(
//     {
//       email: 'theoutlander@live.com'  // search query
//     }, 
//     {
//       email: 'theoutasdasdlander@live.com'   // field:values to update
//     },
//     {
//       new: true,                       // return updated doc
//       runValidators: true              // validate before update
//     })
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })

//   EmailModel
//   .findOneAndRemove({
//     email: 'theoutasdasdlander@live.com'
//   })
//   .then(response => {
//     console.log(response)
//   })
//   .catch(err => {
//     console.error(err)
//   })