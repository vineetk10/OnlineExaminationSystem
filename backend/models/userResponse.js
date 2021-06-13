var mongoose = require("mongoose");

var userResponseSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    questionPaperId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionPaper"
    },
    responses: [{
        questionPaperJsonResponse:{
            type: String,
            default: ""
        }
    }]
})

module.exports = mongoose.model("UserResponse", userResponseSchema);