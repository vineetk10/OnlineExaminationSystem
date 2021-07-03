const QuestionPaper = require("../models/questionPaper")

module.exports = {
    
    GetAllQuestionPapersOfUser: function(req) {
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
}