const passport =        require('passport');
const LocalStrategy =   require('passport-local').Strategy;
const db =              require('../db.js');



passport.use(new LocalStrategy(
    function(username, password, done){

    }

));



module.exports = passport;

