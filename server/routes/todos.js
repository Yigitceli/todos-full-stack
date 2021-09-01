const todosRouter = require("express").Router();
const db = require("../db.js");

todosRouter.param("todoId", async (req, res, next, id) => {
  try {
    const todo = await db.oneOrNone(
      "SELECT * FROM todos WHERE todo_id=$1 AND user_id=$2",
      [id, req.user.user_id]
    );
      
    if (!todo) {
      res.status(404).send("There is no todo with this id!");
    } else {
      req.todoId = parseInt(id);
      req.todo = todo;
      
      next();
    }
  } catch (error) {
    next(error);
  }
});

todosRouter.get("/", async (req, res, next) => {
  try {
    
    const todos = await db.manyOrNone("SELECT * FROM todos WHERE user_id=$1", [
      req.user.user_id,
    ]);
    

    if (!todos.length) {
      res.status(404).send([]);
    } else {
      res.json(todos);
    }
  } catch (error) {
    next(error);
  }
});

todosRouter.get("/:todoId", (req, res, next) => {
  try {
    res.send(req.todo);
  } catch (error) {
    next(error);
  }
});

todosRouter.post("/", async (req, res, next) => {
  try {
    

    const { todoName, todoDescription } = req.body;

    if (todoName.length <= 0 || todoDescription.length <= 0) {
      res.status(500).send("Invalid Input");
    } else {
      const todo = await db.one(
        "INSERT INTO todos(todo_name, todo_description, user_id) VALUES($1, $2, $3) RETURNING *",
        [todoName, todoDescription, req.user.user_id]
      );
      
      res.status(202).json(todo);
    }
  } catch (error) {
    next(error);
  }
});

todosRouter.delete("/:todoId", async (req, res, next) => {
  try {    
    
    const id = await db.one(
      "DELETE FROM todos WHERE todo_id=$1 AND user_id=$2 RETURNING todo_id",
      [req.todoId, req.user.user_id]
    );
    
    
    if (!id) {
      res.status(500).send("Can`t remove!");
    } else {
      res.status(200).send(id);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = todosRouter;
