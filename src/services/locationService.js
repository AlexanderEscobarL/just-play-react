import axios from './axiosDefault'

const get = () => axios.get('/locations')


export default {
    get,
}