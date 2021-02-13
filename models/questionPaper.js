var mongoose = require("mongoose");

var questionPaperSchema = new mongoose.Schema({
    questionPaperName:{
        type:String
    },
    schoolId:{
        type: ObjectId,
        ref: "School"
    },
    subjectId: {
        type: ObjectId,
        ref: "Subject"
    }
})

module.exports = mongoose.model("Questionpaper",questionPaperSchema);