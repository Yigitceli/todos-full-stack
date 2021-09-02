const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const errorHandler = require("express-error-handler");
const indexRouter = require("./routes/index.js");
const passport = require("./auth/passport.js");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const PostgreSqlStore = require("connect-pg-simple")(session);
const path = require("path");
const app = express();

//

app.use(morgan("dev"));
//app.use(cors({origin: "https://todos-fullstack.herokuapp.com", credentials:true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*if(process.env.NODE_ENV === "production"){
  console.log("Production")
  app.use(express.static(path.join(__dirname, "./client/build")));

}*/

app.use(cookieParser());
/*app.use(
  session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    store: new PostgreSqlStore({
      conString: process.env.DATABASE_URL,      
    }),    
  })
);*/
app.use(passport.initialize());
app.use(passport.session());
//app.use("/api", indexRouter);
app.use("/asd", (req, res, next )=> {
  res.json("TESTT");
})


app.use((err, req, res, next) => {
  res.sendStatus(500);
});


app.get("*", function (request, response) {
  response.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server Listening at `);
});
