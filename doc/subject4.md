#### Rust：拓展前端工具链

​      有前端同学可能有这样的疑问，前端和Rust有关系吗？那么陡峭的学习曲线前端有学的必要吗？的确，Rust 与 JS 好像就是两个开发体验的极端。我们先看下rust在前端的应用，看是否有一个你钟情的应用让你有些许的热情去了解它。

- 构建工具： Rspack，SWC，Turbo，farm，Rolldown（新一代Vite），Parcel，Biome（Rome的继任者）
- 运行时：Deno
- 框架：next.js，Actix Web
- 桌面应用：Tarui
- 代码转换：SWC   
- webassembly工具：Yew，wasm-bindgen，wasm-pack
- 格式化：dprint
- 编辑器： zed
- 与Node交互：napi-rs，neon
- Oxc工具集：lint，AST，minifier，formatter

  对于很大一批的前端同学而言，学习一门偏底层的语言太难了。也许学习Rust是一个不错的选择，虽然不见得容易多少，所有权可能已经让你比较头疼了，但是并发更让你一头雾水。