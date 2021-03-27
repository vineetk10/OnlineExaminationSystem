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

exports.getAllQuestionPapers = (req,res)=>{
    let limit = req.query.limit ? parseInt(req.query.limit) : 8;
    let sortBy = req.query.sortBy ? parseInt(req.query.sortBy) : "_id";

    QuestionPaper.find()
    .select("-questions")
    .sort([[sortBy, "asc"]])
    .limit(limit)
    .exec((error,papers)=>{
        if(error)
        {
            return res.status(400).json({
                error: "No Question Paper Found"
            })
        }
        return res.json(papers);
    })
}