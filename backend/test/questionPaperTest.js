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
    questionPaper = QuestionPaper.create({
        paperTitle:"Marathi",
        subject: "Marathi",
        duration:"120",
        maxMarks:"100",
        createdBy: "604e0f96a224d944b89ef730", 
        questions: "t@t.com",  
        password: "test"})
        .then(() => console.log("Insert Successful")) 
        .catch((err)=>console.log(err))

    // Test for ajax call but too tedious and difficult
    // describe('GET /tasks', function() {
    //     it('returns a list of tasks', function(done) {
    //         chai.request(app)
    //         .post(`/api/questionPapers/${userId}`)
    //         .set("Accept","application/json")
    //         .set("Content-Type", "application/json")
    //             .send({
    //                 "userId": "604e0f96a224d944b89ef730"
    //              })
    //             .end(function(err, res) {
    //                 console.log(res);
    //                 expect(res.body).to.have.lengthOf(1);
    //                 done(err);
    //             });
    //     });
    // });

    describe('GET ALL QUESTION PAPERS', function() {
        it('returns number of papers', async function() {
            var papers = await GetAllQuestionPapersOfUser({
                "query": {},
                "body" : {"userId":"604e0f96a224d944b89ef730"}
            })

            expect(papers.length).to.equal(8);
        });
    });

})