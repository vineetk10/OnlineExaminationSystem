var mongoose = require("mongoose");

var userResponseSchema = new mongoose.Schema({
    questionName:{
        type:String
    },
    userId:{
        type: ObjectId,
        ref: "User"
    },
    questionId:{
        type: ObjectId,
        ref: "Question"
    },
    response: {
        type: String
    }
})

module.exports = mongoose.model("UserResponse",userResponseSchema);