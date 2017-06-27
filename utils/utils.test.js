// const expect = require('expect');
// const utils = require('./utils');
// // pierwszy test
// it('Should add two number', ()=>{
//    let res = utils.add(3,4);
//     expect(res).toBe(7).toBeA('number');
// });
// // drugi test
// it('Should multiply number by itself', ()=>{
//     let res = utils.multiply(4);
//     expect(res).toBe(16).toBeA('number');
// });
// // trzeci test
// it("should expect some value", ()=>{
//     // expect(11).toNotBe(2);
//     // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//     // expect([2,4,6,5]).toInclude(4);
//     expect({
//         name: 'igor',
//         location: 'my location',
//         age: 22
//     }).toInclude({
//         age: 22
//     });
// });
//
//
// it("should do something with callback", (done)=>{
//     utils.asyncAdd(3,5, (sum)=>{
//         expect(sum).toBe(8).toBeA("number");
//         done();
//     });
// });
//
//
// it("should do something with callback---2", (done)=>{
//     utils.asyncMultiply(3, (sum)=>{
//         expect(sum).toBe(9).toBeA("number");
//         done();
//     });
// });