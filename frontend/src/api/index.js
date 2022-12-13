import axios from "axios";

export const axiosInstance = axios.create({baseURL:process.env.REACT_APP_BACKEND_URL})


axiosInstance.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem('access')}`;
    return config;
});

export default axiosInstance;