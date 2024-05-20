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

下面我们看一下基于webpack的Vue2工程迁移到Rspack都需要做哪些改造。

首先，借助脚手架生成项目基本结构，框架选择时请选择Vue2。

```shell
pnpm create rsbuild@latest
```

