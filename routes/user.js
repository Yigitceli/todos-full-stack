const userRouter = require("express").Router();
const db = require("../db.js");
const bcrypt = require("bcryptjs");
const passport = require("passport");

userRouter.post("/login", passport.authenticate("local"), (req, res, next) => {
  try {
       
    req.session.save();
    res.status(200).json(req.user);
  } catch (error) {
    next(error);
  }
});

userRouter.get("/logged", (req, res, next) => {
  try {    
    
    
    if (req.isAuthenticated()) {
      res.send({ loggedIn: true, user: req.user });
    } else {
      res.send({ loggedIn: false });
    }
  } catch (error) {
    next(error);
  }
});

userRouter.post("/register", async (req, res, next) => {
  try {
    
    
    const user = req.body;
    console.log(user);
    if (user.username.length < 6 || user.password.length < 6) {
      res.json("Username and Password must have 6 or more characters!");
    } else {
      const userDB = await db.oneOrNone(
        "SELECT * FROM users WHERE username=$1",
        [user.username]
      );
      console.log(userDB);

      if (!userDB) {
        const hash = await bcrypt.hash(user.password, 10);        
        const userId = await db.one(
          "INSERT INTO users(username, password, first_name, last_name) VALUES($1, $2, $3, $4) RETURNING user_id",
          [user.username, hash, user.firstName, user.lastName]
        );
        console.log("USER ID " + userId);

        res.status(200).json(userId);
      } else {
        res.json("Username is taken!");
      }
    }
  } catch (error) {
    next(error);
  }
});

userRouter.get("/logout", (req, res, next) => {
  console.log("LOGOUT");
  console.log(req.session);
  console.log(req.user); 
  req.session.destroy();
  req.logOut();

  res.send(200);
});

module.exports = userRouter;
