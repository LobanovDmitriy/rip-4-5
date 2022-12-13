import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    fetchAddToBasket,
    fetchGetBasket,
    fetchGetUserBasket,
    fetchRemoveFromBasket, fetchUpdateBasketStatus
} from "../../api/services/basketService";

export const fetchGetBasketAction = createAsyncThunk('getBasket/fetchGetBasket',
    async () =>{
        return await fetchGetBasket()
    })

export const fetchAddToBasketAction = createAsyncThunk('addToBasket/fetchAddToBasket',
    async (values) =>{
        return await fetchAddToBasket(values)
    })

export const fetchRemoveFromBasketAction = createAsyncThunk('removeFromBasket/fetchRemoveFromBasket',
    async (pk) =>{
        return await fetchRemoveFromBasket(pk)
    })

export const fetchGetUserBasketAction = createAsyncThunk('getUserBasket/fetchRemoveFromBasket',
    async (values) =>{
        return await fetchGetUserBasket(values)
    })

export const fetchUpdateBasketStatusAction = createAsyncThunk('updateBasketStatus/fetchUpdateBasketStatus',
    async (values) =>{
        return await fetchUpdateBasketStatus(values)
    })