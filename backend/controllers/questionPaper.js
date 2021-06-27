const QuestionPaper = require("../models/questionPaper")

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
    
    let papers = await GetAllQuestionPapersOfUser(req);
    if(papers==undefined || papers.hasOwnProperty('error'))
        return res.status(400).json(papers.error);
    return res.json(papers);
}


function GetAllQuestionPapersOfUser(req) {
    let limit = req.query.limit ? parseInt(req.query.limit) : 8;
    let sortBy = req.query.sortBy ? parseInt(req.query.sortBy) : "_id";
    let userId = req.body.userId;

     return QuestionPaper.find({ createdBy: userId })
        .select("-questions")
        .sort([[sortBy, "asc"]])
        .limit(limit)
        .exec()
        .then((papers) => {
            return papers;
        })
        .catch(error=>{
            return {
                error: "No Question Paper Found"
            };
        })
}

exports.createQuestionPaper = (req, res)=>{
    const questionPaper = new QuestionPaper(req.body);
    questionPaper.save((err, paper)=>{
        if(err){
            return res.status(400).json({
                err: "NOT able to save question paper in DB"+"Error is"+err
            });
        }
        res.json({
            paperTitle: paper.paperTitle,
            subject: paper.subject,
            id: paper._id
        })    
   });
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
