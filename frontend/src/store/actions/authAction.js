import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchLogout, fetchRefresh, fetchSignin, fetchSignup } from '../../api/services/authService';

export const fetchSignupAction = createAsyncThunk('signup/fetchSignup', async (values) => {
    return await fetchSignup(values);
});

export const fetchSigninAction = createAsyncThunk('signin/fetchSignin', async (values) => {
    return await fetchSignin(values);
});

export const fetchLogoutAction = createAsyncThunk('logout/fetchLogout', async () => {
    return await fetchLogout();
});

export const fetchRefreshAction = createAsyncThunk('refresh/fetchRefresh', async (values) => {
    return await fetchRefresh(values);
});