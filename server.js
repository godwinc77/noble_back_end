const express = require("express")
const { append, format, type } = require("express/lib/response")
const app = express()
const body_parser = require("body-parser")
const mongoose = require ("mongoose")
var session = require("express-session")
const MongoStore = require('connect-mongo');
const fileupload = require("express-fileupload")
const path = require("path")
mongoose. set ( "strictQuery" , true ) ;
mongoose.connect('mongodb://localhost/noble_db')




app.set("view engine", "ejs")
app.use(express.static("public"))
app.set ('views', './views')

app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))
app.use(fileupload())
app.use (session({
    secret: "gfjdjcjkdjjcjc",
    resave:true,
    saveUninitialized:true,
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/noble_db',
        ttl: 14 * 24 * 60 * 60,
        autoREmove: "native"
    })
}))


var bookingdetailSchma = mongoose.Schema({
    name: String,
    phonenumber: Number,
    message: String,
})
    var bookingdetail = mongoose.model("bookingdetail", bookingdetailSchma)
app.get('/', function(req,res,){
    var data = req.body  
    
    res.render('index',{data:data})
})

app.post("/bookingdet", async function(req,res){
    var bookingdet = req.body

    console.log(bookingdet)
    var bookingupdate = new bookingdetail({
        name: bookingdet.name,
        phonenumber: bookingdet.phonenumber,
        message: bookingdet.message
    })
    console.log(bookingdet.name)
    console.log(bookingupdate)
    bookingupdate.save()
    res.send("booking sucessfull")
   
})
app.listen(3000)