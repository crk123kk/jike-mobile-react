// 封装和文章相关的所有请求

import { request } from "@/utils"

// 获取 频道列表
export const getChannelAPI = () => {
    return request({
        url: '/channels',
        method: 'GET',
    })
}

// 提交文章表单

export const createArticleAPI = (data) => {
    return request({
        url: '/mp/articles?draft=false',
        method: 'POST',
        data
    })
}