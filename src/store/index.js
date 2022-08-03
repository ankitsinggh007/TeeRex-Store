import CartReducer from "./Cart-slice";
import ProductSlice from "./Product-slice";
import {configureStore} from "@reduxjs/toolkit";
const store=configureStore({
    reducer:{
        Cart:CartReducer,
        Product:ProductSlice,
    }
})
export default store;