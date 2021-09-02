import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos} from "../../store/todosSlice";
import AddTodo from "../addTodo/addTodo";
import Todo from "../todo/todo";

import "./todos.css";

export default function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.user.first_name);
  const lastName = useSelector(state => state.user.last_name)
  const loggedIn = useSelector((state) => state.user.loggedIn);

  useEffect(() => {    
    if (loggedIn) {      
      dispatch(fetchTodos());
      
    }
  }, [dispatch, loggedIn]);

  return (
    <div className="todos container ">
      <h1 className="text-info">{firstName + " " + lastName}</h1>
      {todos.length === 0 ? (
        <div className="my-5 shadow p-3 mb-5 bg-body rounded">
          <h2 className="text-white">TODOS is Empty! Add some TODO.</h2>
        </div>
      ) : (
        <ul>
          {todos.map((item) => (
            <Todo key={item.todo_id} data={item} />
          ))}
        </ul>
      )}

      <AddTodo />
    </div>
  );
}
