var mongoose = require("mongoose");

var schoolSchema = new mongoose.Schema({
    schoolName:{
        type:String,
        required:true,
        maxlength:32
    },
    address:{
        type:String,
        maxlength:100
    }
})

module.exports = mongoose.model("school",schoolSchema);