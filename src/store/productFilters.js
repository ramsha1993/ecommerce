import { createSlice } from "@reduxjs/toolkit";


const initialState={
    category:'',
}
const productFilters=createSlice({
    name:'product',initialState,reducers:{
        setcategory(state,action){
            state.category=action.payload
            // return action.payload
        },
    }
})

export const {setcategory}=productFilters.actions;
export default productFilters.reducer;
