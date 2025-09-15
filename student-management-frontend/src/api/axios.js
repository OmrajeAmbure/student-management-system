import axios from "axios";

const API = axios.create({
    baseURL: "https://student-management-system-jitf.onrender.com", // no need for http://localhost:8080
});

// Attach JWT token automatically
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default API;
