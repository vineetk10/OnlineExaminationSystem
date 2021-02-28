var mongoose = require("mongoose");
const { StringDecoder } = require("string_decoder");

var questionPaperSchema = new mongoose.Schema({
    paperTitle: {
        type: String
    },
    subject: {
        type: String
    },
    duration: {
        type: String
    },
    maxMarks: {
        type: String
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
        ref: 'user'
    },
    questions: [{
        questionType: {
            type: String
        },
        question: {
            type: String
        },
        marks: {
            type: Number
        },
        questionImage: {
            type: Buffer
        },
        options: {
            type: Array
        },
        answer: {
            type: String
        }
    }],
    responses: [{
        responseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'userResponse'
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    }]
})

module.exports = mongoose.model("Questionpaper", questionPaperSchema);