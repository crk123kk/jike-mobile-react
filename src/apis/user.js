// 用户相关的所有请求

const { request } = require("@/utils")

// 登录
export const loginAPI = (formData) => {
    return request({
        url: '/authorizations',
        method: 'POST',
        data: formData
    })
}

// 获取用户信息
export const getProfileAPI = () => {
    return request({
        url: '/user/profile',
        method: 'GET',
    })
}