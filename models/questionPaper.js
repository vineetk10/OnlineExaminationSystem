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
        ref: 'User'
    },
    questions: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            index: true,
            required: true,
            auto: true,
        },
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
            ref: 'UserResponse'
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
})

module.exports = mongoose.model("QuestionPaper", questionPaperSchema);