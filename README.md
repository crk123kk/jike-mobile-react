# 项目介绍

    react 学习实践项目

    关于极客的手机移动端项目

# 技术栈

    前端框架 ：react

    组件库 ：ant design \ echarts

    样式初始化库：normalize.css

    富文本编辑器：react-quill

        这里 react 18 是需要 react-quill 2.0.0 版本的
            不需要通过 npm i react-quill@2.0.0-beta.2来安装，直接 npm i react-quill 就可以了(对于 React 18.3.1，推荐使用 react-quill 的最新版本，所以这里直接安装就好了)

            执行 npm i react-quill@2.0.0-beta.2 报错了，直接按照报错的指导也可以解决（虽然这里正常安装了，但是浏览器还是报错了，但是提示的是quill的语法可能 过期，组件还是能正常使用）

                npm i react-quill@2.0.0-beta.2 --legacy-peer-deps

                        npm ERR! code ERESOLVE
                        npm ERR! ERESOLVE unable to resolve dependency tree
                        npm ERR!
                        npm ERR! While resolving: jike-mobile-react@0.1.0
                        npm ERR! Found: react@18.3.1
                        npm ERR! node_modules/react
                        npm ERR!   react@"^18.3.1" from the root project
                        npm ERR!
                        npm ERR! Could not resolve dependency:
                        npm ERR! peer react@"^16.0.0" from react-quill@2.0.0-beta.2
                        npm ERR! node_modules/react-quill
                        npm ERR!   react-quill@"2.0.0-beta.2" from the root project
                        npm ERR!
                        npm ERR! Fix the upstream dependency conflict, or retry
                        npm ERR! this command with --force or --legacy-peer-deps
                        npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
                        npm ERR!
                        npm ERR!
                        npm ERR! For a full report see:
                        npm ERR! C:\Users\陈墨\AppData\Local\npm-cache\_logs\2024-10-05T15_02_08_115Z-eresolve-report.txt

                        npm ERR! A complete log of this run can be found in: C:\Users\陈墨\AppData\Local\npm-cache\_logs\2024-10-05T15_02_08_115Z-debug-0.log
