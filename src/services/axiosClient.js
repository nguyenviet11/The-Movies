import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosClient.interceptors.request.use(function (config) {

    return config;
}, function (error) {
    return Promise.reject(error);
});

export default axiosClient