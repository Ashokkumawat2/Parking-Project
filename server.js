const express=require('express')
const app=express()
const parkingRouter=require('./routers/parking')
const mongoose=require('mongoose')
app.use(express.urlencoded({extended:false}))
const session=require('express-session')
mongoose.connect('mongodb://127.0.0.1:27017/parking')





app.use(session({
    secret:'Ashok',
    resave:false,
    saveUninitialized:false
}))
app.use(parkingRouter)
app.use(express.static('public'))
app.set('view engine','ejs')
app.listen(5000)