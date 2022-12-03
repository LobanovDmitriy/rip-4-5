import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    authorized:false
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        handleAuthorized:(state)=>
        {
            state.authorized = !state.authorized
            state.name = 'default_user'
        }
    }
})

export const {handleAuthorized} = userSlice.actions
export const userReducer = userSlice.reducer