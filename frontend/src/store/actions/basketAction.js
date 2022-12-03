import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchAddToBasket, fetchGetBasket, fetchRemoveFromBasket} from "../../api/services/basketService";

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