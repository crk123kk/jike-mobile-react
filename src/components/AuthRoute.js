const { getToken } = require("@/utils")
const { Navigate } = require("react-router-dom")


const AuthRoute = ({ children }) => {
    const token = getToken()

    if (token) {
        // 有 token 则放行
        return <>{children}</>
    } else {
        // 没有 token 则跳转到登录页，并替换记录
        return <Navigate to={'/login'} replace />
    }
}

export default AuthRoute