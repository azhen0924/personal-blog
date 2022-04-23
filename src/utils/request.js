// 引入axios并封装
import axios from 'axios'
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API + "/api",
    timeout: 5000 // request timeout
})




export default service

