import {axiosInstance} from "../index";

export const fetchGetBasket = () => axiosInstance.get('/userservices-full/').then(response=>response?.data)

export const fetchAddToBasket = (values) => axiosInstance.post('/userservices/', values).then(response=>response?.data)

export const fetchRemoveFromBasket = (pk) => axiosInstance.delete(`/userservices/${pk}/`).then(response=>response?.data)

export const fetchGetUserBasket = (values)  => axiosInstance.get(`/userservices-full/`, {params:values}).then(response=>response?.data)

export const fetchUpdateBasketStatus = (values)  => axiosInstance.put(`/userservices-full/${values.id}/`, {params:values}).then(response=>response?.data)