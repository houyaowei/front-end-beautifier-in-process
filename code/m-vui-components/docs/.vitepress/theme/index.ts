import DefaultTheme from 'vitepress/theme'
//@ts-ignore
// import MVui from 'm-vui' //TODO,有bug，待处理

import { VPDemo } from '../vitepress'

console.log(import.meta.env)

// 版本及打包日期
console.log(
    `%c Version %c ${import.meta.env.DOC_VERSION}`,
    'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060',
    'padding: 1px 5px 1px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #1475b2'
)
console.log(
    `%c BuildTime %c ${import.meta.env.DOC_BUILD_TIME}`,
    'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060',
    'padding: 1px 5px 1px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #1475b2'
)

export default ({
    ...DefaultTheme, // 默认主题
    enhanceApp: ({app}: any) => {
        // 注册全局组件
        // app.use(MVui)
        app.component('Demo', VPDemo)
    }
})
