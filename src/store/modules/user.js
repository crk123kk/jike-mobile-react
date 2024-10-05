// 和用户相关的状态管理

import { getProfileAPI, loginAPI } from "@/apis/user";
import { setToken as _setToken, getToken, removeToken } from "@/utils";

import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
    name: 'user',
    initialState: {
        token: getToken() || '',
        userInfo: {}
    },
    reducers: {
        // 同步修改
        setToken(state, action) {
            state.token = action.payload
            _setToken(action.payload)
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload
        },
        clearUserInfo(state) {
            // 不仅要清空 token 还要清空个人信息，并且将持久化的信息情况
            state.token = ''
            state.userInfo = {}
            removeToken()
        }

    }
})

// 解构 actionCreate
const { setToken, setUserInfo, clearUserInfo } = userStore.actions

// 登录
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await loginAPI(loginForm)
        dispatch(setToken(res.data.token))
    }
}

// 获取个人用户信息
const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await getProfileAPI()
        dispatch(setUserInfo(res.data))
    }
}


export { setToken, fetchLogin, fetchUserInfo, clearUserInfo }

// 解构 reducer
const userReducer = userStore.reducer
export default userReducer