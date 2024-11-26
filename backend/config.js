const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://srin5764:H0eH6FvonqUbWGPp@naanmudhalavan.ujn6c.mongodb.net/?retryWrites=true&w=majority&appName=NaanMudhalavan")
.then(()=>{
   console.log("connected to mongodb")
})