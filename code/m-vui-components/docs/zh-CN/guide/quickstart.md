---
title: 快速开始
lang: zh-CN
---

# 快速开始

## 全局引入

在`main.js`中

```js
import { createApp } from 'vue';
import App from './App.vue';
// 完整引入组件库
import WeDesign from '@wei_design/web-vue';

const app = createApp(App);
// 全局安装
app.use(WeDesign).mount('#app');
```

组件当中

```vue
<MVuiButton />
```

## 按需引入

`main.js`中

```js
import { createApp } from 'vue'
import App from './App.vue'
import MVui from 'm-vui'
const app = createApp(App)
app.use(MVui).mount('#app')

```

组件当中

```vue
<MVuiButton />
```
