import {createSlice} from '@reduxjs/toolkit';
import { SigninSlice } from '../Types/Interface';

const initialState: SigninSlice = {
    isSigninClicked : false
}

const signInSlice = createSlice({
    name:'signIn',
    initialState,
    reducers: {
        enableSignIn: (state) => {
            state.isSigninClicked = true
        },
        disableSignIn:(state) => {
            state.isSigninClicked=false
        }
    }
})

export const {enableSignIn, disableSignIn} = signInSlice.actions
export default signInSlice.reducer
