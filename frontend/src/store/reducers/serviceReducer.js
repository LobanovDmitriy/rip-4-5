import {createSlice} from "@reduxjs/toolkit";
import {
    fetchAddServiceAction, fetchDeleteServiceAction,
    fetchGetAllServicesAction,
    fetchGetOneServiceAction,
    fetchSaveServiceAction
} from "../actions/serviceAction";

const initialState = {
    fetchStatus: '',
    services: [],
    service: {}
}

const serviceSlice = createSlice({
    name:'service',
    initialState,
    reducers:{reset:(state)=>{state.service = {}}},
    extraReducers: (builder) => {
        builder.addCase(fetchGetAllServicesAction.pending, (state)=>{
            console.log('fetchGetAllServicesAction.pending')
            state.fetchStatus = 'pending'
        });
        builder.addCase(fetchGetAllServicesAction.fulfilled, (state, {payload})=>{
            console.log('fetchGetAllServicesAction.fulfilled')
            state.fetchStatus = 'fulfilled'
            state.services = payload
        })
        builder.addCase(fetchGetOneServiceAction.pending, (state)=>{
            console.log('fetchGetOneServiceAction.pending')
            state.fetchStatus = 'pending'
        });
        builder.addCase(fetchGetOneServiceAction.fulfilled, (state, {payload})=>{
            console.log('fetchGetOneServiceAction.fulfilled')
            state.fetchStatus = 'fulfilled'
            state.service = payload
        })
        builder.addCase(fetchSaveServiceAction.pending, (state)=>{
            console.log('fetchSaveServiceAction.pending')
            state.fetchStatus = 'pending'
        });
        builder.addCase(fetchSaveServiceAction.fulfilled, (state, {payload})=>{
            console.log('fetchSaveServiceAction.fulfilled')
            state.fetchStatus = 'fulfilled'
        })
        builder.addCase(fetchDeleteServiceAction.pending, (state)=>{
            console.log('fetchDeleteServiceAction.pending')
            state.fetchStatus = 'pending'
        });
        builder.addCase(fetchDeleteServiceAction.fulfilled, (state, {payload})=>{
            console.log('fetchDeleteServiceAction.fulfilled')
            state.fetchStatus = 'fulfilled'
        })
        builder.addCase(fetchAddServiceAction.pending, (state)=>{
            console.log('fetchAddServiceAction.pending')
            state.fetchStatus = 'pending'
        });
        builder.addCase(fetchAddServiceAction.fulfilled, (state)=>{
            console.log('fetchAddServiceAction.fulfilled')
            state.fetchStatus = 'fulfilled'
        })
    }})

export const {reset} = serviceSlice.actions
export const serviceReducer = serviceSlice.reducer