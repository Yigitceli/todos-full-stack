const indexRouter = require("express").Router();
const todosRouter = require("./todos.js");
const userRouter = require("./user.js");


indexRouter.use("/user", userRouter);
indexRouter.use("/todos", todosRouter);

indexRouter.get("/", (req, res, next) => {
    res.json("TEST");
})

module.exports = indexRouter;
