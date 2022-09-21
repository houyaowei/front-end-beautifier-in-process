### lerna 命令

- 初始化应用 lerna init -i/--independent

- 新建子应用 lerna create [package]

- 添加依赖包 
  lerna add module-1 packages/prefix-*
  lerna add module-1 --scope=module-2 --dev   //给module-2添加依赖包module-1

- 安装所有package的依赖  lerna bootstrap

- 运行所有包的script    lerna run tag

- 单独运行某个package下的命令   lerna exec --scope example-web -- yarn start

- 发布  lerna publish


### yarn相关的命令

- 添加某个包的依赖  yarn workspace blog add react react-dom --save

- 添加全局依赖   yarn add -W babel --dev

- 清除项目中所有 node_modules     yarn workspaces run clean