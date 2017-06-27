const request = require('supertest');

let app = require('./server.js').app;

it("should return hello world response", (done)=>{
    request(app)
        .get('/')
        .expect('hello world')
        .end(done);
});