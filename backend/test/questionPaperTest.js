const supertest = require("supertest");
process.env.NODE_ENV = 'test'
var app = require('../index');

let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
var rewire = require('rewire');
// var should = chai.should();
const QuestionPaper = require("../models/questionPaper");
var questionPapers = rewire('../controllers/questionPaper');
var GetAllQuestionPapersOfUser = questionPapers.__get__('GetAllQuestionPapersOfUser');
describe('Task API Routes', function() {
    // This function will run before every test to clear database
    
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
            var papers = await GetAllQuestionPapersOfUser({
                "query": {},
                "body" : {"userId":"604e0f96a224d944b89ef730"}
            })

            expect(papers.length).to.equal(1);
        });

        it('returns 0 number of papers when userId incorrect', async function() {
            var papers = await GetAllQuestionPapersOfUser({
                "query": {},
                "body" : {"userId":"604e0f96a224d944b89ef731"}
            })

            expect(papers.length).to.equal(0);
        });
    });

})