import { createSlice } from "@reduxjs/toolkit";
import {UseFetchResponseSlice} from "../Types/Interface"

const initialState : UseFetchResponseSlice = {
    searchData: [],
    popularCuisinesData:{cuisineDishes : [], isResetEnabled: false ,  isSubmitEnabled: true, selectedDish:''},
    loading: false,
    error:null
}

const searchData = createSlice({
    name:'searchData',
    initialState,
    reducers:{
        setSearchData:(state, action) => {
            state.searchData = action.payload
        },
        setCuisinesData:(state, action) => {
            state.popularCuisinesData.cuisineDishes =action.payload
            state.popularCuisinesData.selectedDish = action.payload.query;
            state.popularCuisinesData.isSubmitEnabled = false;
            state.popularCuisinesData.isResetEnabled = true;
            console.log(action, "action")
        },
        handleCuisineReset : (state) => {
            state.popularCuisinesData.cuisineDishes =[]
            state.popularCuisinesData.isResetEnabled = false;
            state.popularCuisinesData.isSubmitEnabled = true;
            state.popularCuisinesData.selectedDish = ''
        }
    }
})


export const {setSearchData, setCuisinesData, handleCuisineReset} = searchData.actions
export default searchData.reducer