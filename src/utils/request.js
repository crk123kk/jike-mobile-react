

// axios 封装处理
/*
    1、根域名配置
    2、超时时间
    3、请求拦截器、相应拦截器
*/

import axios from "axios";

const request = axios.create({
    // 根域名
    baseURL: "http://geek.itheima.net/v1_0",
    // 超时时间
    timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use((config) => {
    return config
}, (err) => {
    return Promise.reject(err)
})

// 响应拦截器
request.interceptors.response.use((res) => {
    return res.data
}, (err) => {
    return Promise.reject(err)
})



export { request }