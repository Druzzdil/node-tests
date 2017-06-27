let db = require('./db.js');

module.exports.handleSignUp = (email, password) => {
    // check if user exist
    // save to db
    // display message
    // console.log(``)
    db.saveUser({email, password});
};