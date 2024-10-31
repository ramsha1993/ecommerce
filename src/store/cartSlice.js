import { createSlice } from "@reduxjs/toolkit";
const initialState = []

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{

        add(state,action){
            state.push(action.payload)
        },remove(state,action){
            return state.filter((__,idx) => idx !== action.payload.index)
       
        }

    }
})

export const { add , remove }=cartSlice.actions; 
export default cartSlice.reducer;