import { configureStore } from '@reduxjs/toolkit';
import signinReducer from "../Slices/signinSlice";
import resturantReducer from "../Slices/resturantDataSlice"
import popularCuisinesReducer from "../Slices/searchDataSlice"

const Store = configureStore({
    reducer:{
        signIn: signinReducer,
        resturantData: resturantReducer,
        popularCuisinesData: popularCuisinesReducer
    }
})


export default Store