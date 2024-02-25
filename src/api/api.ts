import axios from 'axios';
import { environment } from '../environmets/environment';

const { API_URL } = environment;

console.log(API_URL);

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