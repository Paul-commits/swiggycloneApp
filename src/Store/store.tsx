import { configureStore } from '@reduxjs/toolkit';
import signinReducer from "../Slices/signinSlice";
import resturantReducer from "../Slices/resturantDataSlice"

const Store = configureStore({
    reducer:{
        signIn: signinReducer,
        resturantData: resturantReducer
    }
})


export default Store