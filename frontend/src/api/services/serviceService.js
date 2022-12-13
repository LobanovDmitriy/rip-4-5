import {axiosInstance} from "../index";

export const fetchGetAllServices = (params) => axiosInstance.get('/service/', {params}).then(response=>response?.data)

export const fetchGetOneService = (id) =>axiosInstance.get(`/service/${id}/`).then(response=>response?.data)

export const fetchSaveService = (values) =>axiosInstance.put(`/service/${values.id}/`, values).then(response=>response?.data)

export const fetchDeleteService = (values) =>axiosInstance.delete(`/service/${values.id}/`, values).then(response=>response?.data)

export const fetchAddService = (values) =>axiosInstance.post(`/service/`, values).then(response=>response?.data)