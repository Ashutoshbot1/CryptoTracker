import { createSlice } from "@reduxjs/toolkit";

const apiLoadSlice=createSlice({
    name:"apiLoad",
    initialState:"",
    reducers:{
        addApiLoad(state,action){
            return action.payload;
        }
    }
});

export default apiLoadSlice.reducer;
export const{addApiLoad}=apiLoadSlice.actions;