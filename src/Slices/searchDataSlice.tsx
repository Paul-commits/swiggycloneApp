import { createSlice } from "@reduxjs/toolkit";
import {UseFetchResponseSlice} from "../Types/Interface"

const initialState : UseFetchResponseSlice = {
    popularCuisinesList: [],
    selectedPopularCuisine:{
        cuisineDishes : [], 
        isResetEnabled: false,  
        isSubmitEnabled: true, 
        selectedDish:'',
        filteredRestaurants:[], 
        restaurantsDishes : []
    },
    loading: false,
    error:null
}

const searchData = createSlice({
    name:'popularCuisines',
    initialState,
    reducers:{
        setPopularCuisines:(state, action) => {
            state.popularCuisinesList = action.payload
        },
        setSelectedPopularCuisine:(state, action) => {
            state.selectedPopularCuisine.cuisineDishes =action.payload
            state.selectedPopularCuisine.selectedDish = action.payload.query;
            state.selectedPopularCuisine.isSubmitEnabled = false;
            state.selectedPopularCuisine.isResetEnabled = true;
        },
        setCuisineReset : (state) => {
            state.selectedPopularCuisine.cuisineDishes =[]
            state.selectedPopularCuisine.isResetEnabled = false;
            state.selectedPopularCuisine.isSubmitEnabled = true;
            state.selectedPopularCuisine.selectedDish = '';
            state.selectedPopularCuisine.filteredRestaurants =[]

        },
        setFilteredRestaurants : (state, action) => {
            state.selectedPopularCuisine.filteredRestaurants =action.payload
        },
        setRestaurantsDishes : (state, action) => {
            state.selectedPopularCuisine.restaurantsDishes = action.payload
        }

    }
})


export const {setPopularCuisines, setSelectedPopularCuisine, setCuisineReset, setFilteredRestaurants,setRestaurantsDishes} = searchData.actions
export default searchData.reducer