import {createSlice} from "@reduxjs/toolkit";
import {
    fetchAddToBasketAction,
    fetchGetBasketAction,
    fetchGetUserBasketAction,
    fetchRemoveFromBasketAction, fetchUpdateBasketStatusAction
} from "../actions/basketAction";

const initialState = {
    fetchStatus: '',
    fetchActionStatus: '',
    services: [],
}

const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers:{reset:(state) => {
            state.services = {}
        }},
    extraReducers: (builder) => {
        builder.addCase(fetchGetBasketAction.pending, (state)=>{
            console.log('fetchGetBasketAction.pending')
            state.fetchStatus = 'pending'
        });
        builder.addCase(fetchGetBasketAction.fulfilled, (state, {payload})=>{
            console.log('fetchGetBasketAction.fulfilled')
            state.fetchStatus = 'fulfilled'
            state.services = payload
        })
        builder.addCase(fetchAddToBasketAction.pending, (state)=>{
            console.log('fetchAddToBasketAction.pending')
            state.fetchStatus = 'pending'
        });
        builder.addCase(fetchAddToBasketAction.fulfilled, (state)=>{
            console.log('fetchAddToBasketAction.fulfilled')
            state.fetchStatus = 'fulfilled'
        })
        builder.addCase(fetchRemoveFromBasketAction.pending, (state)=>{
            console.log('fetchRemoveFromBasketAction.pending')
            state.fetchActionStatus = 'pending'
        });
        builder.addCase(fetchRemoveFromBasketAction.fulfilled, (state)=>{
            console.log('fetchRemoveFromBasketAction.fulfilled')
            state.fetchActionStatus = 'fulfilled'
        })
        builder.addCase(fetchGetUserBasketAction.pending, (state)=>{
            console.log('fetchGetUserBasketAction.pending')
            state.fetchStatus = 'pending'
        });
        builder.addCase(fetchGetUserBasketAction.fulfilled, (state, {payload})=>{
            console.log('fetchGetUserBasketAction.fulfilled')
            state.fetchStatus = 'fulfilled'
            state.services = payload
        })
        builder.addCase(fetchUpdateBasketStatusAction.pending, (state)=>{
            console.log('fetchUpdateBasketStatusAction.pending')
            state.fetchStatus = 'pending'
        });
        builder.addCase(fetchUpdateBasketStatusAction.fulfilled, (state, {payload})=>{
            console.log('fetchUpdateBasketStatusAction.fulfilled')
            state.fetchStatus = 'fulfilled'
        })
    }})

export const {reset} = basketSlice.actions
export const basketReducer = basketSlice.reducer