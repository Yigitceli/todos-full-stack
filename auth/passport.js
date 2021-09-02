const passport =        require('passport');
const LocalStrategy =   require('passport-local').Strategy;
const db =              require('../db.js');
const bcrypt =          require('bcryptjs');
const session =         require('express-session');


passport.use(new LocalStrategy(
    async function(username, password, done){
        try {
            console.log("AUTHENTİCATE");
            console.log(username);
            
            const user = await db.oneOrNone('SELECT * FROM users WHERE username=$1',[username]);
            if(!user){
                done(null, false,{message: 'Username is not exist!'});
            }
            if(!await bcrypt.compare(password, user.password)){
                done(null, false, {message: 'Wrong password'});
            }
            done(null, user);

        } catch (error) {
            done(error);
            
        }
    }

));

passport.serializeUser(function(user, done) {
    done(null, user.user_id);
  });
  
  passport.deserializeUser(async function(id, done) {
    try {
        const user = await db.one('SELECT * FROM users WHERE user_id=$1', [id]);
        
        done(null, user);
    } catch (error) {
        done(error);
    }
  });



module.exports = passport;

