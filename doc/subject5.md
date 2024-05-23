#### 构建工具Vite和Rspack实战

Rspack实战

Rspack是有有字节在2023年3月10日发布的基于Rust的打包工具，但是具备兼容大部分Webpack生态的能力，在webpack生态下的loader，plugins在Rspack下已经兼容，像常用的babel-loader、less-loader、sass-loader等。这对熟悉webpack的开发者来说是个福音，既有熟悉的配置项目又有高性能的开发体验、构建产出。

另外Rspack在前端社区了产生了不小的影响，像Monorepo的框架Nx也对Rspack插件支持；Netlify也接入了Rspack，性能提升非常明显。

官方也提供了对常用对Webpack的迁移方案，主要包含babel-loader，推荐同样使用Rust实现的swc-loader；推荐 CSS 模块类型 ，内置的 CSS 模块类型预制了对 CSS、CSS HMR、CSS Modules 以及 CSS 提取功能的支持，不需要再单独配置，减少了配置的工作量；使用 Asset Modules 来代替 file-loader 和 url-loader。

在Rspack中，资源（图片，字体，视频）位高权重，这些资源都可以被内置处理，不再借助其他loader。

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset',
      }
    ],
  },
};
```

在web框架开发方面也提供了脚手架的能力。像React、Vue2&3、Solidjs、Nextjs等。

下面我们看一下使用Rspack创建一个基本的Vue3工程。

```
"dev": "rsbuild dev --open",
"build": "rsbuild build",
"preview": "rsbuild preview"
```

首先，借助脚手架生成项目基本结构，框架选择时请选择Vue3。

```shell
pnpm create rsbuild@latest
```

Rspack官方提供了3个基础的命令，dev、build、preview

```shell
"dev": "rsbuild dev --open",
"build": "rsbuild build",
"preview": "rsbuild preview"
```

代码结构和静态资源不需要做任何的改变，原目录照样移动即可。重点是配置文件rebuild.config.mjs的配置。

1、修改页面挂载点

基于Rspack的挂载点和基于Vite的挂载点稍微不同，后者的节点可以自定义，但是前者是以id为root的元素为跟元素，所以你不需要在html中什么元素，只需要在Vue挂载的时候指定就行了

```vue
const app = createApp(App)
app.mount('#root')
```

2、基础配置

- context：构建的基础路径，是entry和output中的基础路径
- entry：入口文件
- output：需要需要自定义文件的hash值或者根据环境区分打包文件，需要单独配置该项
- devServer：开发环境配置
- module：配置如何解析模块，如前面介绍的图片和字体的解析使用asset，对样式（scss，stylus，css）的处理使用javascript/auto
- Resolve:  配置模块的解析逻辑，如常用的alias别名

对前端开发者而言，熟练掌握上面的配置是最基本的要求。