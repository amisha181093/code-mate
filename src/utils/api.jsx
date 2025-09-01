import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8001', // 👈 your axiosInstance base URL
    timeout: 10000, // optional (10 sec)
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
