import axios from 'axios';
import {message} from 'antd';

axios.defaults.baseURL = 'http://127.0.0.1:5000/api';

// Request interceptors
axios.interceptors.request.use(config => {
    const token = window.localStorage.getItem('mrs-storage');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Response interceptors
axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response) {
        switch (error.response.status) {
            case 401:
                message.error('401: Please login');
                break;
            case  403:
                message.error('403: Forbidden');
                break;
            case 404:
                message.error('404: Not Found');
                break;
            default:
                break;
        }
    } else if (error.request) {
        message.error('OPTIONS get Error');
    } else {
        console.error(error.message);
    }
    return Promise.reject(error);
});

export default axios;
