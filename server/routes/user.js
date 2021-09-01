const userRouter = require("express").Router();
const db = require("../db.js");
const bcrypt = require("bcrypt");
const passport = require("passport");

userRouter.post("/login", passport.authenticate("local"), (req, res, next) => {
  try {
    console.log(req.session);    
    res.status(200).json(req.user);
  } catch (error) {
    next(error);
  }
});

userRouter.post("/register", async (req, res, next) => {
  try {
    const user = req.body;
    if (user.username.length < 6 || user.password.length < 6) {
      res.json("Username and Password must have 6 or more characters!");
    } else {
      const userDB = await db.oneOrNone(
        "SELECT * FROM users WHERE username=$1",
        [user.username]
      );

      if (!userDB) {
        await bcrypt.hash(user.password, 10, async function (err, hash) {
          const userId = await db.one(
            "INSERT INTO users(username, password) VALUES($1, $2) RETURNING user_id",
            [user.username, hash]
          );

          res.status(200).json(userId);
        });
      } else {
        res.json("Username is taken!");
      }
    }
  } catch (error) {
    next(error);
  }
});

userRouter.get("/logout", (req, res, next) => {
  console.log('IN LOGOUT');
  console.log(req.session);  
  req.session.destroy();
  console.log(req.session);
  req.logOut();
  console.log(res.user);
  
  res.send(200);
});

module.exports = userRouter;
