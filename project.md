# 疑问

    什么是 CRA 项目： create-react-app 的简写

    SRC: src 目录 常规分类

    git关联：有远程仓库的情况下怎么关联、没有远程仓库怎么关联创建

# 按照业务规范整理项目目录（SRC 目录）

    apis：接口

    assets：静态资源

    components：公共组件

    pages：页面级别组件

    router：路由

    store：redux 状态

    utils：工具类

# 创建项目体系（文件目录）

# 创建路由体系（路由守卫等）

# 创建请求体系

    配置拦截器、基本请求等

    axios 封装

# 使用 Redux 管理 token

    redux 对 token 的同步异步修改

    token 的持久化

    封装token操作

        多模块会使用到token，所以封装起来方便使用

    在拦截器中注入 token

# 使用 token 做路由权限控制

    高阶组件的封装

        核心逻辑：

            有token

            无token

# 正式页面的创建

    二级路由的创建

    菜单和页面的联动

# 个人信息的 redux 管理

    方便全局使用

# 退出登录

    退出登录需要清空个人信息和token相关信息（包括持久化）

# 处理 token 失效问题

# 引入 Echart 工具

    图表的 dom 节点必须要有宽高

    获取容器节点不仅可以用 id 的方式，也可以通过 useRef 的方式

## 封装 Echart 组件

    当大多数的图表差不多的时候，可以对组件进行封装

# 封装 API

    把项目中的所有接口按照业务模块以函数的形式统一封装到apis模块中

    为什么获取个人信息里面不需要传个人 id？

        因为登录的时候，获取到的token其实已经包含了登录的用户的信息了，所以调用接口的时候，带上token的就已经相当于把登录用户的id带上了，服务会根据带上的token去获取登录的用户的信息，而获取token本身也是一个获取用户信息的接口

# 文章发布功能的实现

    富文本插件： react-quill

# 文章列表的功能实现

    封装频道成 业务 hook

        步骤：

            1、创建一个 use 打头的函数
            2、在函数中封装业务逻辑，并 return 出组件中要用到的状态数据（可以是对象、数组等）
            3、组件中导入函数执行并解构状态数据使用

# 编辑文章

    回填功能

# 项目打包

    项目打包，本地部署 server 服务

# 项目优化

    路由懒加载

# 分析包体积大小

    source-map-explorer

    "analyze": "source-map-explorer build/static/js/*.js"

        这个指令是告诉 source-map-explorer 去分析 build/static/js 目录下的所有 js 文件

# 项目优化

    CDN 优化

        体积较大的非业务 JS 文件，比如 react、react-dom

            1、体积较大，需要利用 CDN 文件在浏览器的缓存特性，加快加载时间
            2、非业务 JS 文件，不需要经常做变动， CDN 不用频繁更新缓存

        项目中做法：

            1、把需要做 CDN 缓存的文件排除在打包之外（react\react-dom)
            2、以CDN的方式重新引入资源（react、react-dom）