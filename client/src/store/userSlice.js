import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: "",
        user_id: "",
        first_name: "",
        last_name: "",
        loggedIn: false
    },
    reducers:{
        logIn: (state, action) => {
            state.loggedIn = true;
            state.username = action.payload.username;
            state.user_id = action.payload.user_id;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
        },

        logOut: (state, action) => {
            
            state.loggedIn = false;
            state.username = "";
            state.user_id = "";
            state.first_name = "";
            state.last_name = "";
        }
        
    }
})

export const {logIn, logOut} = userSlice.actions;
export default userSlice.reducer;