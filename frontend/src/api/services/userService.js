import {axiosInstance} from '../index';

export const fetchGetAllUsers = () =>
    axiosInstance
        .get('/user')
        .then((response) => response?.data)

export const fetchUpdateUserRole = (values) =>
    axiosInstance
        .put(`/user/role`, values)
        .then((response) => response?.data)

export const fetchGetUser = () =>
    axiosInstance
        .get('api/user')
        .then((response) => response?.data)