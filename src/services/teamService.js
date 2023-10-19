import axios from './axiosDefault'

const get = () => axios.get('/teams')


export default {
    get,
}