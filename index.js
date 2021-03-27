require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My routes
const authRoutes = require("./routes/auth");
const questionPaperRoutes = require("./routes/questionPaper");

//DB Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true
}).then(()=>{
    console.log("DB CONNECTED");
}).catch(console.log("DB CONNECTED FAILED"))

//PORT
const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`app is running at ${port}`);
})

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", authRoutes);
app.use("/api", questionPaperRoutes);