import {createSlice} from "@reduxjs/toolkit"
import { fetchSignupAction, fetchSigninAction, fetchLogoutAction, fetchRefreshAction } from '../actions/authAction'
import {fetchGetUserAction} from "../actions/userAction";


const initialState = {
    fetchStatus: '',
    authorized: false,
    user: {},
    role: 'USER',
    error: '',
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        handleUserRole: (state, { payload }) => {
            state.role = payload
        },
        refreshUserRole: (state) => {
            if (state.user.role === 'USER') {
                state.role = 'USER'
            }
        }},
        extraReducers: (builder) => {
            builder.addCase(fetchSignupAction.pending, (state) => {
                console.log('fetchSignupAction.pending')
                state.fetchStatus = 'pending'
                state.authorized = false
                state.error = ''
            });
            builder.addCase(fetchSignupAction.fulfilled, (state, { payload }) => {
                console.log('fetchSignupAction.fulfilled')
                state.fetchStatus = 'fulfilled'
                state.authorized = true
                state.error = ''
                state.user = payload
                localStorage.setItem('access', payload.access)
                localStorage.setItem('refresh', payload.refresh)
            })
            builder.addCase(fetchSignupAction.rejected, (state, { error }) => {
                console.log('fetchSignupAction.rejected')
                console.log(error)
                state.fetchStatus = 'rejected'
                state.error = JSON.parse(error.message)
            })
            builder.addCase(fetchSigninAction.pending, (state) => {
                console.log('fetchSigninAction.pending')
                state.fetchStatus = 'pending'
                state.error = ''
            })
            builder.addCase(fetchSigninAction.fulfilled, (state, { payload }) => {
                console.log('fetchSigninAction.fulfilled')
                console.log(payload)
                state.fetchStatus = 'fulfilled'
                state.authorized = true
                state.error = ''
                localStorage.setItem('access', payload.access)
                localStorage.setItem('refresh', payload.refresh)
            })
            builder.addCase(fetchSigninAction.rejected, (state, { error }) => {
                console.log('fetchSigninAction.rejected')
                state.fetchStatus = 'rejected'
                state.error = JSON.parse(error.message)
            })
            builder.addCase(fetchLogoutAction.fulfilled, (state, { payload }) => {
                console.log('fetchLogoutAction.fulfilled')
                state.fetchStatus = 'fulfilled'
                state.user = {}
                state.authorized = false
                state.error = ''
                localStorage.removeItem('access')
                localStorage.removeItem('refresh')
            })
            builder.addCase(fetchRefreshAction.rejected, (state, { error }) => {
                console.log('fetchRefreshAction.rejected')
                state.fetchStatus = 'rejected'
                state.error = JSON.parse(error.message)
            })
            builder.addCase(fetchRefreshAction.pending, (state) => {
                console.log('fetchRefreshAction.pending')
                state.fetchStatus = 'pending'
                state.error = ''
            })
            builder.addCase(fetchRefreshAction.fulfilled, (state, { payload }) => {
                console.log('fetchRefreshAction.fulfilled')
                state.fetchStatus = 'fulfilled'
                state.authorized = true
                state.error = ''
                localStorage.setItem('access', payload.access)
                localStorage.setItem('refresh', payload.refresh)
            })
            builder.addCase(fetchGetUserAction.pending, (state) => {
                console.log('fetchGetUserAction.pending')
                state.fetchStatus = 'pending'
                state.error = ''
            });
            builder.addCase(fetchGetUserAction.fulfilled, (state, { payload }) => {
                console.log('fetchGetUserAction.fulfilled')
                state.fetchStatus = 'fulfilled'
                state.user = payload.data
                console.log(payload)
                console.log(localStorage.getItem('access'))
                state.authorized = true
                state.error = ''
            })
            builder.addCase(fetchGetUserAction.rejected, (state, { error }) => {
                console.log('fetchGetUserAction.rejected')
                console.log(error)
                state.fetchStatus = 'rejected'
                state.error = JSON.parse(error.message)
            })
        }
    })

export const { handleUserRole, refreshUserRole } = userSlice.actions;
export const userReducer = userSlice.reducer