import { createSlice } from "@reduxjs/toolkit";
import {UseFetchResponseSlice} from "../Types/Interface"

const initialState : UseFetchResponseSlice = {
    searchData: [],
    popularCuisinesData:[],
    // popularCuisinesData2:{cuisineDishes : [], selectedDish:""},
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
            state.popularCuisinesData =action.payload
        }
    }
})


export const {setSearchData, setCuisinesData} = searchData.actions
export default searchData.reducer