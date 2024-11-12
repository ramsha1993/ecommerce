import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import productfilter from './productFilters'
import targetedValue from './gettargetvalue'
const store= configureStore({
    reducer:{
        cart:cartReducer,product:productfilter,target:targetedValue
        
    }
});

export default store;