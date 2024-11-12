import { createSlice } from "@reduxjs/toolkit";
let catchdata = JSON.parse(localStorage.getItem('data') || "[]");
let initialState = catchdata;
 const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{

        add(state,action){
            state.push(action.payload)
            const exisitingdata=JSON.parse(localStorage.getItem('data') )|| []
           const updateData=[...exisitingdata,action.payload] 
            localStorage.setItem('data',JSON.stringify(updateData))
        },remove(state,action){
             const newState=state.filter((elem,idx) => elem.id !== action.payload.id)
            localStorage.setItem('data',JSON.stringify(newState))
            return newState
        }

    }
})

export const { add , remove }=cartSlice.actions; 
export default cartSlice.reducer;