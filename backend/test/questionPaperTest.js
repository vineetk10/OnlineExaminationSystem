process.env.NODE_ENV = 'test';
const QuestionPaper = require("../models/questionPaper");
var QuestionPaperManager = require("../manager/questionPaper")

describe('Question Paper Test', function() {

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

        it('returns undefined number of papers when userId blank', async function() {
            var papers = await QuestionPaperManager.GetAllQuestionPapersOfUser({
                "query": {},
                "body" : {"userId":""}
            })

            expect(papers.length).to.equal(undefined);
        });

        it('returns undefined number of papers when userId empty space', async function() {
            var papers = await QuestionPaperManager.GetAllQuestionPapersOfUser({
                "query": {},
                "body" : {"userId":" "}
            })

            expect(papers.length).to.equal(undefined);
        });

        it('returns undefined number of papers when userId null', async function() {
            var papers = await QuestionPaperManager.GetAllQuestionPapersOfUser({
                "query": {},
                "body" : {"userId":null}
            })

            expect(papers.length).to.equal(0);
        });
    });

    describe('Create Question Paper', function(){
        after(()=>{
            QuestionPaper.deleteOne({paperTitle:"Marathi",subject: "Marathi"})
            .then(() => console.log("Delete Successful"))
            .catch((err)=>console.log(err))
        });

        it('returns correct paper when paper saved', async function() {
            var paper = await QuestionPaperManager.CreateQuestionPaperOfUser({
                "query": {},
                "body" : {
                    paperTitle:"Marathi",
                    subject: "Marathi",
                    duration:"120",
                    maxMarks:"100",
                    createdBy: "604e0f96a224d944b89ef730", 
                    questions: "t@t.com",  
                    password: "test"
                }
            })

            expect(paper.paperTitle).to.equal("Marathi");
        });

        it('returns undefined when paper blank', async function() {
            var paper = await QuestionPaperManager.CreateQuestionPaperOfUser({
                "query": {},
                "body" : {
                }
            })

            expect(paper.paperTitle).to.equal(undefined);
        });
    });
})