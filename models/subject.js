var mongoose = require("mongoose");

var subjectSchema = new mongoose.Schema({
    subjectName:{
        type:String
    },
    totalMark:{
        type:Number
    },
    passingMarks: {
        type: Number
    }
})

module.exports = mongoose.model("Subject",subjectSchema);