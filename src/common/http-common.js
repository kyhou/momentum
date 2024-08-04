import axios from "axios";

export default axios.create({
    baseURL: (import.meta.env.VITE_API_ADDR || (('http://localhost:' + (import.meta.env.VITE_PORT || 8088)) + '/api')),
    headers: {
        "Content-type": "application/json"
    }
});