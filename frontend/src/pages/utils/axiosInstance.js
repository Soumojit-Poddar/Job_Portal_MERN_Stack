import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 80000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// Request Intersepter
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (errror) => {
        return Promise.reject(errror);
    },
);

// Response Interseptor
axiosInstance.interceptors.response.use(
    (response) => {
        // Handle common errors globally
        if(error.response){
            if(error.response.status === 401){
                // Redirect to the login page
                window.location.href = "/";
            } else if(error.response.status === 500){
                console.error("Server error. Please try again later.");
            }
        } else if(error.code === "ECONNABORTED"){
            console.error("Request timeout. Please try again.");
        }
        return Promise.regect(error);
    }
);

export default axiosInstance;