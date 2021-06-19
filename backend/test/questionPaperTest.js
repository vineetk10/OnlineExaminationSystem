const QuestionPaper = require("../models/questionPaper")
let questionPaper; 
let userId = "123";
describe('Task API Routes', function() {
    // This function will run before every test to clear database
    questionPaper = QuestionPaper.create({
        createdBy: "tester", 
        questions: "t@t.com",  
        password: "test"})
        .then(() => done()) 

    // In this test it's expected a task list of two tasks
    describe('GET /tasks', function() {
        it('returns a list of tasks', function(done) {
            request.post(`http://localhost:8001/api/questionPapers/${userId}/`)
                .send({
                    userId: "123"
                 })
                 .expect(200)
                .expect('Content-Type', /json/)
                .end(function(err, res) {
                    console.log(res);
                    expect(res.body).to.have.lengthOf(1);
                    done(err);
                });
        });
    });

})