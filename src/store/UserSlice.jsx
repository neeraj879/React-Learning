import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"users",
    initialState:[],
    reducers:{
        addUser(state, action){
            state.push(action.payload);
            console.log(action);
        },
        removeUser(state, action){
            //console.log(action.payload);
            state.splice(action.payload,1);
        },
        clearUsers(state, action){
            state.splice(0);
        },
    },
});
export default UserSlice.reducer;
export const {addUser, removeUser, clearUsers} = UserSlice.actions;