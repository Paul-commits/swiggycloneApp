import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resturantData : null
}

const resturantDataSlice = createSlice({
    name:'resturantDataSlice',
    initialState, 

    reducers:{
        getResturantData:(state, action)=>{
            state.resturantData = action.payload
        }
    }

})

export const {getResturantData} = resturantDataSlice.actions
export default resturantDataSlice.reducer