import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://k8s-emtgroup-e9dcfcf1fc-2053161546.eu-central-1.elb.amazonaws.com/api",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    },
    withCredentials: false
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("jwtToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            console.log('Response error:', error.response.status, error.response.data);
        } else if (error.request) {
            console.log('Request error:', error.request);
        } else {
            console.log('Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
