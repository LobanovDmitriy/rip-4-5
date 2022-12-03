import {axiosInstance} from "../index";

export const fetchGetBasket = () => axiosInstance.get('/userservices').then(response=>response?.data)

export const fetchAddToBasket = (values) => axiosInstance.post('/userservices/', values).then(response=>response?.data)

export const fetchRemoveFromBasket = (pk) => axiosInstance.delete(`/userservices/${pk}/`).then(response=>response?.data)