const userRouter = require("express").Router();
const db = require("../db.js");
const bcrypt = require("bcrypt");
const passport = require("passport");



userRouter.post('/login', passport.authenticate('local'), (req, res, next) =>{
    try {
        res.send(200);
    } catch (error) {
        next(error);        
    }
})



userRouter.post("/register", async (req, res, next) => {
  try {
    const user = req.body;
    if (user.username.length < 4 || user.password.length < 6) {
      res
        .status(500)
        .send("Username and Password must have 6 or more characters!");
    } else {
      const userDB = await db.oneOrNone("SELECT * FROM users WHERE username=$1", [
        user.username,
      ]);
      
      if (!userDB) {
        await bcrypt.hash(user.password, 10, async function (err, hash) {
          const userId = await db.none(
            "INSERT INTO users(username, password) VALUES($1, $2)",
            [user.username, hash]
          );
          res.send(userId);
        });
      } else {
        res.status(500).send("Username is already exist!");
      }
    }
  } catch (error) {
      next(error);
  }
});

userRouter.get('/logout', (req, res ,next) => {
    req.logOut();
    res.send(200);
});

module.exports = userRouter;
