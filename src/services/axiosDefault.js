import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: window.baseURL
})

export default axiosInstance