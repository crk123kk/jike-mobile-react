// 和用户相关的状态管理

import { setToken as _setToken, getToken, request } from "@/utils";

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
        }

    }
})

// 解构 actionCreate
const { setToken, setUserInfo } = userStore.actions

// 登录
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await request.post('/authorizations', loginForm)
        dispatch(setToken(res.data.token))
    }
}

// 获取个人用户信息
const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await request.post('/user/profile')
        dispatch(setUserInfo(res.data))
    }
}


export { setToken, fetchLogin, fetchUserInfo }

// 解构 reducer
const userReducer = userStore.reducer
export default userReducer