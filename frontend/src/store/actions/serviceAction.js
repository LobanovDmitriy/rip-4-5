import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    fetchAddService, fetchDeleteService,
    fetchGetAllServices,
    fetchGetOneService,
    fetchSaveService
} from "../../api/services/serviceService";

export const fetchGetAllServicesAction = createAsyncThunk('getAllServices/fetchGetAllServices',
    async (params) =>{
        return await fetchGetAllServices(params)
    })

export const fetchGetOneServiceAction = createAsyncThunk('getOneService/fetchGetOneService',
    async (id) =>{
        return await fetchGetOneService(id)
    })

export const fetchSaveServiceAction = createAsyncThunk('saveService/fetchSaveService',
    async (values) =>{
        return await fetchSaveService(values)
    })

export const fetchDeleteServiceAction = createAsyncThunk('deleteService/fetchDeleteService',
    async (values) =>{
        return await fetchDeleteService(values)
    })

export const fetchAddServiceAction = createAsyncThunk('addService/fetchAddService',
    async (values) =>{
        return await fetchAddService(values)
    })