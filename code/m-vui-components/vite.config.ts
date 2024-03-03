import { resolve } from 'path'
import { Alias, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import Markdown from 'vite-plugin-md'
// 提取ts文件
import dts from 'vite-plugin-dts'
import VitePluginMetaEnv from 'vite-plugin-meta-env'

const { name: title, version: APP_VERSION } = require('./package.json')

const alias: Alias[] = [
    {
        find: '@',
        replacement: `${resolve(__dirname, './src')}`
    },
    {
        find: /^m-vui(\/(es|lib))?$/,
        replacement: `${resolve(__dirname, './packages/index')}/`
    }
]

export default () => {
    // 增加环境变量
    const metaEnv = {
        APP_VERSION,
        APP_NAME: title
    }

    return defineConfig({
        server: {
            open: true,
            port: 5173,
            host: true
        },
        resolve: {
            alias
        },
        //https://cn.vitejs.dev/guide/build.html#library-mode
        build: {
            outDir: 'lib',
            lib: {
                entry: resolve(__dirname, './packages/index.ts'),
                name: 'm-vui',
                fileName: 'm-vui'
            },
            rollupOptions: {
                // 确保外部化处理那些你不想打包进库的依赖
                external: ['vue'],
                output: {
                    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                    globals: {
                        vue: 'Vue'
                    }
                }
            }
        },
        plugins: [
            vue({ include: [/\.vue$/, /\.md$/] }),
            vueJsx(),
            // Markdown(),
            dts(),
            // 环境变量
            VitePluginMetaEnv(metaEnv, 'import.meta.env'),
            VitePluginMetaEnv(metaEnv, 'process.env')
        ]
    })
}
