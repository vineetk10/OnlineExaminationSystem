const QuestionPaper = require("../models/questionPaper")

exports.getQuestionPaperById = (req,res,next,id)=>{
    QuestionPaper.findOne(id).exec((err,questionPaper)=>{
        if(err)
        {
            return res.status(400).json({
                error: "Question Paper Not Found"
            })
        }
        req.questionPaper = questionPaper;
        next();
    })
}