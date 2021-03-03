var mongoose = require("mongoose");

var userResponseSchema = new mongoose.Schema({
    createdBy: {
        type: ObjectId,
        ref: "User"
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    questionPaperId: {
        type: ObjectId,
        ref: "QuestionPaper"
    },
    responses: [{
        questionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "QuestionPaper" // not sure about this
        },
        answer: {
            type: String,
            required: true,
            default: ""
        },
        evaluated: {
            type: Boolean,
            default: false
        },
        marksObtained: {
            type: Number,
            default: 0
        }
    }]
})

module.exports = mongoose.model("UserResponse", userResponseSchema);