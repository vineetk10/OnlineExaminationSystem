const QuestionPaper = require("../models/questionPaper")
var QuestionPaperManager = require("../manager/questionPaper")

exports.getQuestionPaperById = (req,res,next,id)=>{
    QuestionPaper.findById(id)
    .exec((err,questionPaper)=>{
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

exports.getQuestionPaper = (req,res) => {
        return res.json(req.questionPaper);
}

exports.getAllQuestionPapers = async (req,res)=>{
    
    let papers = await QuestionPaperManager.GetAllQuestionPapersOfUser(req);
    if(papers==undefined || papers.hasOwnProperty('error'))
        return res.status(400).json(papers.error);
    return res.json(papers);
}

exports.createQuestionPaper = async (req, res)=>{
    let paperSaved = await QuestionPaperManager.CreateQuestionPaperOfUser(req);
    if(paperSaved==undefined || paperSaved.hasOwnProperty('error'))
        return res.status(400).json(paperSaved.error);
    return res.json(paperSaved);
}

exports.deleteQuestionPaper = (req,res)=>{
    QuestionPaper.findByIdAndDelete(req.body.questionPaperId,(err,paper)=>{
        if (err){
            console.log(err);
            return res.status(400).json({
                error: "No Question Paper Deleted"
            });
        }
        else{
            console.log("Deleted : ", paper);
            return res.json();
        }
        
    })
}

exports.updateQuestionPaper = (req,res) => {

    QuestionPaper.findByIdAndUpdate(
        { _id: req.questionPaper._id },
        { $set: req.body },
        { new: true, useFindAndModify: false },
        (err, questionPaper) => {
         if (err) {
         return res.status(400).json({
              error: "You are not authorized to update this user"
         });
        }
        res.json(questionPaper);
        }
    )
}
