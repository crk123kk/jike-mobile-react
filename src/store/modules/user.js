// 和用户相关的状态管理

import { setToken as _setToken, getToken, request } from "@/utils";

import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
    name: 'user',
    initialState: {
        token: getToken() || '',
    },
    reducers: {
        // 同步修改
        setToken(state, action) {
            state.token = action.payload
            _setToken(action.payload)
        },
    }
})

// 解构 actionCreate
const { setToken } = userStore.actions

const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await request.post('/authorizations', loginForm)

        dispatch(setToken(res.data.token))
    }
}


export { setToken, fetchLogin }

// 解构 reducer
const userReducer = userStore.reducer
export default userReducer