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

// 获取文章列表
export const getArticleListAPI = (params) => {
    return request({
        url: '/mp/articles',
        method: 'GET',
        params
    })
}

// 删除文章
export const deleteArticleAPI = (id) => {
    return request({
        url: `/mp/articles/${id}`,
        method: 'DELETE',
    })
}

// 获取文章详情
export const getArticleByIdAPI = (id) => {
    return request({
        url: `/mp/articles/${id}`,
        method: 'GET',
    })
}

// 编辑文章
export const updateArticleAPI = (data) => {
    return request({
        url: `/mp/articles/${data.id}?draft=false`,
        method: 'PUT',
        data
    })
}