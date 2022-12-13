import { createAsyncThunk } from '@reduxjs/toolkit';
import {fetchGetAllUsers, fetchGetUser, fetchUpdateUserRole} from '../../api/services/userService';

export const fetchGetAllUsersAction = createAsyncThunk('getAllUsers/fetchGetAllUsers', async () => {
    return await fetchGetAllUsers();
});

export const fetchUpdateUserRoleAction = createAsyncThunk(
    'updateUserRole/fetchUpdateUserRole',
    async (values) => {
        return await fetchUpdateUserRole(values);
    }
);

export const fetchGetUserAction = createAsyncThunk('getUser/fetchGetUser', async () => {
    return await fetchGetUser();
});