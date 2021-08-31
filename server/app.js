const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const errorHandler = require("express-error-handler");
const indexRouter = require("./routes/index.js");
const passport = require("./auth/passport.js");
const session = require("express-session");


const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use("/api", indexRouter);


app.use(errorHandler());

app.listen(process.env.PORT, () => {
  console.log(`Server Listening`);
});
