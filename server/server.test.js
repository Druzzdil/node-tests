const request = require('supertest');
const expect = require('expect');

let app = require('./server.js').app;

describe('Utils', ()=>{
    it("should return hello world response", (done)=>{
        request(app)
            .get('/')
            .expect(200)
            .expect((res)=>{
                expect(res.body).toInclude({
                    error: "ok"
                });
            })
            .end(done);
    });
    it("should have a name and age", (done)=>{
        request(app)
            .get('/users')
            .expect(200)
            .expect((res)=>{
                expect(res.body).toInclude({
                    name: "dune",
                    age: 30
                });
            })
            .end(done)
    });
});

// it("should return hello world response", (done)=>{
//     request(app)
//         .get('/')
//         .expect(200)
//         .expect((res)=>{
//             expect(res.body).toInclude({
//                 error: "ok"
//             });
//         })
//         .end(done);
// });

// it("should have a name and age", (done)=>{
//    request(app)
//        .get('/users')
//        .expect(200)
//        .expect((res)=>{
//            expect(res.body).toInclude({
//                name: "dune",
//                age: 30
//            });
//        })
//        .end(done)
// });