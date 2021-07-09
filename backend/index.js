require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My routes
const authRoutes = require("./routes/auth");
const questionPaperRoutes = require("./routes/questionPaper");
const userRoutes = require("./routes/user");

//DB Connection
const env = process.env.NODE_ENV.toString() || 'development';

if(env.trim() == "test")
{
    mongoose.connect(process.env.TESTDATABASE, {
        useNewUrlParser: true
    }).then(() => {
        console.log("TEST DB CONNECTED");
    }).catch(console.log("TEST DB CONNECTED FAILED"))
}else{
    mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true
    }).then(() => {
        console.log("DB CONNECTED");
    }).catch(console.log("DB CONNECTED FAILED"))
}
//PORT
const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`app is running at ${port}`);
})
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", authRoutes);
app.use("/api", questionPaperRoutes);
app.use("/api", userRoutes);

module.exports = app;