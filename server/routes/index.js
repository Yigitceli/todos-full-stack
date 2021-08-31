const indexRouter = require("express").Router();
const todosRouter = require("./todos.js");
const userRouter = require("./user.js");


indexRouter.use("/user", userRouter);
indexRouter.use("/todos", todosRouter);

module.exports = indexRouter;
