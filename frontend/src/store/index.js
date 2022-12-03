import { configureStore } from '@reduxjs/toolkit'
import {serviceReducer} from "./reducers/serviceReducer";
import {userReducer} from "./reducers/userReducer";
import {basketReducer} from "./reducers/basketReducer";

export const store = configureStore({
    reducer: {service: serviceReducer, user:userReducer, basket:basketReducer},
})