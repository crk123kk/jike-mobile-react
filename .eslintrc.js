// 基本的 eslint 配置
module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'eslint:recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    rules: {
        // 示例：允许在React组件中不定义propTypes（如果使用TypeScript等其他类型检查方式）
        'react/prop-types': 'off',
        // 可以根据项目需求继续添加更多规则
        'no-console': 'warn'
    }
};