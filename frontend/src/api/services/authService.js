import {axiosInstance} from '../index';

export const fetchSignup = (values) =>
    axiosInstance
        .post('add_user', values)
        .then((response) => response?.data)

export const fetchSignin = (values) =>
    axiosInstance
        .post('api/token/obtain', values)
        .then((response) => response?.data)

export const fetchLogout = () =>
    axiosInstance
        .post('/auth/logout')
        .then((response) => response?.data)

export const fetchRefresh = (values) =>
    axiosInstance
        .post('api/token/refresh', values)
        .then((response) => response?.data)
