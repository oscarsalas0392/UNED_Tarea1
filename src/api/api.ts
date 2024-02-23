import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { API_URL } = getEnvVariables()

const api = axios.create({
    baseURL: API_URL
});

api.interceptors.request.use( (config:any) => {

    config.headers = {
        ...config.headers,
    }

    return config;
})


export default api;