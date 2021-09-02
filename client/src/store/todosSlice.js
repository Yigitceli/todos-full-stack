import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("fetchTodos", async (arg) => {
  try {
    
    const response = await axios.get("api/todos/", {
      withCredentials: true,
    });    
    
    
    
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const deleteTodo = createAsyncThunk("deleteTodo", async (arg) => {
  try {
    
    await axios.delete(
      `api/todos/${arg}`,
      { withCredentials: true }
    );

    
    
    
  } catch (error) {
    throw new Error(error.message);
  }
});

export const addTodo = createAsyncThunk("addTodo", async (arg) => {
  try {
    
    const response = await axios.post(
      "api/todos/",
      { todoName: arg.todoName, todoDescription: arg.todoDescription },
      { withCredentials: true }
    );

    
    
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],    
  },
  reducers: {
    setTodo: (state, action) => {
      state.todos = action.payload;
    }
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.todos = [];
    })
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      if (state.todos.length - 1 === 0) {
        state.todos = [];
      } else {
        state.todos = state.todos.filter(
          (item) => item.todo_id !== action.payload.todo_id
        );
      }
      
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todos = [...state.todos, action.payload.data];
    });
  },
});

export const { setTodo } = todosSlice.actions;
export default todosSlice.reducer;
