var express = require('express')
let app = express()
let mongoose = require('mongoose')
let model = require('./mongoose/models')
const PORT = 5000
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
mongoose.connect('mongodb://127.0.0.1:27017/WaqarTest').then(()=>{

    app.listen(PORT , ()=>{
        console.log('connection success')
    })
})

app.get('/',(req,res)=>{
    res.end('sdfsdf')

})

app.post('/create',(req , res)=>{
console.log(req.body)
// let name = req.body.name
// let adress = req.body.adress
let data = new  model(req.body)
data.save().then((data)=>{
console.log(data)
})

res.end('end')
})

