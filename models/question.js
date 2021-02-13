var mongoose = require("mongoose");
const { StringDecoder } = require("string_decoder");

var questionSchema = new mongoose.Schema({
    questionName:{
        type:String
    },
    questionPaperId:{
        type: ObjectId,
        ref: "Questionpaper"
    },
    questionType: {
        type: StringDecoder
    },
    marks: {
        type: Number
    },
    correctAnswer: {
        type: String
    }
})

module.exports = mongoose.model("Question",questionSchema);