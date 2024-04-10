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

- 社区：Github，npm

- 与Node交互：napi-rs，neon

- Oxc工具集：lint，AST，minifier，formatter

  
  

​     对于很大一批的前端同学而言，学习一门偏底层的语言太难了。也许学习Rust是一个不错的选择，虽然不见得容易多少，所有权可能已经让你比较头疼了，但是并发更让你一头雾水。但它或许是我们突破安逸太久前端社区的一把钥匙，帮助我们打开通往新世界的大门。

   吸引开发者拥抱Rust的优势也足够明显，高性能的可靠的系统编程语言，更容易实现类型安全；强大的类型系统；并发性，Rust通过其所有权系统即严格的数据访问规则、借用模型（防止数据竞争）内置了对并发编程的支持；内置包管理，简化了项目管理、依赖项跟踪、构建；工程实践上，内置了rustdoc，方便文档的编写；内置类型推导；

Rust语言基础

熟悉ES6的前端朋友对Rust的变量、常量的声明会比较亲切。变量使用let声明，常量使用const声明

```rust
let chinese = "世界，你好";
let english = "World, hello";
let regions = [chinese, english];
```

在ES6里看似没有特别的，给变量初始化。但是在Rust中这个过程有另一个名字：变量绑定。这个涉及到Rust核心设计的所有权系统，先简单介绍，通过绑定（赋值）给变量绑定一个内存对象，这个变量就拥有了所有权。所有权我们会在稍后详细说明。

按照ES6的语法，变量chinese,english和regions都是可以重新赋值的。先看下在rust里给english变量重新赋值看是否能正常编译、执行。

<img src="./media/ch4/4-1.jpeg" style="zoom:35%;"/>

<center>图4-1</center>   

从报错信息可以看出，"cannot assign twice to immutable variable"，不能给immutable的变量重新赋值，在Rust中绑定的变量默认是不可变（immutable）。细心的朋友可能会发现，在某些编辑器中（如vs code，RustRover）会显式提示变量类型，这得益于Rust的类型推导，在上面的例子中english遍历会被推导成&str类型。

<img src="./media/ch4/4-2.jpeg" style="zoom:55%;"/>

<center>图4-2</center> 

在开发过程中，动态修改变量是非常常见的操作，在Rust中要实现这种效果，需要在变量前添加mut即可，声明为可修改的。

在Rust中字符串有两种类型：String、&str。String有一个可以调整大小的缓冲区，这个缓存是在堆上分配的，并且可以根据需要调整大小。

```rust
let hello = "hello，world".to_owned();
```

如上面的变量hello ,它拥有12个字节的缓冲区，其中11个字节正在使用。可以将String视为Vector，每个元素为无符号类型，简写为vec<u8>

<img src="./media/ch4/4-3.jpeg" style="zoom:55%;"/>

<center>图4-3</center> 

创建String类型可以借助标准库创建，也可以使用to_owned、to_string()将&str转为String：

```rust
let course = String::new("course");
let english: String = "english".to_string(); 
let chinese: String = "chinese".to_string(); 
```

&str总是指向有效 UTF-8 序列的切片（`&[u8]`），并可用来查看 String 的内容。

```rust
let english = "hello,world".to_string();
let sub = &english[6..];
println!("{:?}", sub)   //world
```



