const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect('mongodb://localhost:27017/exampaperbuilder', {
    useNewUrlParser: true
}).then(()=>{
    console.log("DB CONNECTED");
})

const port = 8000;

app.listen(port, ()=>{
    console.log(`app is running at ${port}`);
})
