import {axiosInstance} from "../index";

export const fetchGetAllServices = (params) => axiosInstance.get('/service/', {params}).then(response=>response?.data)

export const fetchGetOneService = (id) =>axiosInstance.get(`/service/${id}/`).then(response=>response?.data)