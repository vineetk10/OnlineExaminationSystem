var mongoose = require("mongoose");

var subjectSchema = new mongoose.Schema({
    subjectName:{
        type:String
    },
    totalMarks:{
        type:Number
    },
    passingMarks: {
        type: Number
    }
})

module.exports = mongoose.model("subject",subjectSchema);