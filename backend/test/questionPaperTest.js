process.env.NODE_ENV = 'test';
var rewire = require('rewire');
const QuestionPaper = require("../models/questionPaper");
var questionPapers = rewire('../controllers/questionPaper');
// var GetAllQuestionPapersOfUser = questionPapers.__get__('GetAllQuestionPapersOfUser');
var QuestionPaperManager = require("../manager/questionPaper")
describe('Task API Routes', function() {

    describe('GET ALL QUESTION PAPERS', function() {

        before(function() { 
            QuestionPaper.create({
                paperTitle:"Marathi",
                subject: "Marathi",
                duration:"120",
                maxMarks:"100",
                createdBy: "604e0f96a224d944b89ef730", 
                questions: "t@t.com",  
                password: "test"
            })
            .then(() => console.log("Insert Successful")) 
            .catch((err)=>console.log(err))
        })
    
        after(()=>{
            QuestionPaper.deleteOne({paperTitle:"Marathi",subject: "Marathi"})
            .then(() => console.log("Delete Successful"))
            .catch((err)=>console.log(err))
        });

        it('returns number of papers when userId correct', async function() {
            var papers = await QuestionPaperManager.GetAllQuestionPapersOfUser({
                "query": {},
                "body" : {"userId":"604e0f96a224d944b89ef730"}
            })

            expect(papers.length).to.equal(1);
        });

        it('returns 0 number of papers when userId incorrect', async function() {
            var papers = await QuestionPaperManager.GetAllQuestionPapersOfUser({
                "query": {},
                "body" : {"userId":"604e0f96a224d944b89ef731"}
            })

            expect(papers.length).to.equal(0);
        });
    });

})