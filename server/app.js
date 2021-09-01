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

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({origin: "http://localhost:3000", credentials:true}));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    store: new PostgreSqlStore({
      conString: process.env.DB_CONNECTION,
    }),    
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/api", indexRouter);

app.use((err, req, res, next) => {
  res.sendStatus(500);
});

app.listen(process.env.PORT, () => {
  console.log(`Server Listening`);
});
