import axios from './axiosDefault'

const get = () => axios.get('/games')
const getByLocationId = id => axios.get(`/games/find?locationId=${id}`)
const post = data => axios.post(`/games`, data)


export default {
    get,
    getByLocationId,
    post,
}