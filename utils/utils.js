module.exports.add = (a,b) => a+b;

module.exports.multiply = (x) => x*x;


module.exports.asyncAdd = (a,b, callback) => {
    setTimeout(function () {
        return callback(a+b);
    },1000);
};


module.exports.asyncMultiply = (a, callback) => {
    setTimeout(function () {
        return callback(a*a);
    },1000);
};

// module.exports.setName = (user, firstName, lastName) =>{
//     user.firstName = firstName;
//     user.lastName = lastName;
//     return user;
// };