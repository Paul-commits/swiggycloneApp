import { configureStore } from '@reduxjs/toolkit';
import signinReducer from "../Slices/signinSlice";
import resturantReducer from "../Slices/resturantDataSlice"
import searchDataReducer from "../Slices/searchDataSlice"

const Store = configureStore({
    reducer:{
        signIn: signinReducer,
        resturantData: resturantReducer,
        searchData: searchDataReducer
    }
})


export default Store