var mongoose = require("mongoose");
const { StringDecoder } = require("string_decoder");

var questionPaperSchema = new mongoose.Schema({
    paperTitle: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    maxMarks: {
        type: String,
        required: true
    },
    instructions: {
        type: String
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    questionPaperJson:{
        type: String,
        default: ""
    },
    responses: [{
        responseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserResponse'
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
})

module.exports = mongoose.model("QuestionPaper", questionPaperSchema);