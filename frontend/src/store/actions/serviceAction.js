import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchGetAllServices, fetchGetOneService} from "../../api/services/serviceService";

export const fetchGetAllServicesAction = createAsyncThunk('getAllApartments/fetchGetAllServices',
    async (params) =>{
        return await fetchGetAllServices(params)
    })

export const fetchGetOneServiceAction = createAsyncThunk('getOneApartment/fetchGetOneService',
    async (id) =>{
        return await fetchGetOneService(id)
    })