import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todosSlice";
import userSlice from "./userSlice";


 const store = configureStore({
    reducer:{
        todos: todosSlice,
        user: userSlice

    }
});

export default store;