import { createSlice } from "@reduxjs/toolkit";


const initialState='';
const gettargetvalue=createSlice({
    name:'target',initialState,reducers:{
        includeitem(state,action){
           return state=action.payload
        }

    }
})
  
export const {includeitem}=gettargetvalue.actions;
export default gettargetvalue.reducer;