## 第3章 Go语言语言及实践

看到目录你也许会有这样的疑问：我只是一名前端开发人员为什么要了解Go语言？学习G语言对于前端开发者来说，虽然并非是必须的，但是确实可以给我们带来一些额外的优势和机会，特别是在前端在多端全面开花的时候。原因总结起来主要有如下几点：

- 提升自己的全栈能力：Go语言是由Google开发的一种编译型语言，同时它又是强类型的，天然支持并发性、垃圾回收、快速编译、丰富的标准库等。使前端比较容易向后端扩展，这样技能提升开发者的全栈能力，又能更好地理解应用架构。
- 扩展Web编程。这块的应用目前最为广泛。Web开发在当前仍然是热门职位，所以，Go语言的Web开发框架也有很多的选择，像Beego、Buffalo、Echo、Gin、Iris和Revel等。
- 扩展前端工具链。前端构建工具Vite在开发阶段是基于esbuild的，掌握一定的Go语言技巧有助于在适当的时候为Vite工具提供适当的扩展。

​    为了便于代码的组织，本篇基础部分将采用module进行代码组织。Go module是对依赖项进行方便管理的系统，module是一系列Go文件的集合，可以通过统一的module path应用，并保存Go版本信息和toolchain的版本。所有的依赖版本都可以通过 go mod graph命令查看。

​    本地文件的各module按目录存放，在各个目录下可以使用go mod 命令初始化，初始化完成，各目录下都会生成一个go.mod文件。

```shell
go mod init [module path]
```

​    比如初始化一个module path为example.com/variables的：

```shell
go mod init example.com/variables
```

  新建variables.go文件，实现需要被外部调用的方法:

```go
func TestVariablesDeclaration() {
	var name = "houyw"
	fmt.Println("variable name in module:", name)
}
```

在调用模块中使用import导入该module

```go
import (
	"example.com/variables"
)
```

到这里module还不能按期望工作，因为编译器还无法解析example.com/variables， 还需要在go.mod中使用replace指令告诉编译器怎么解析这个module path。

<img src="./media/ch3/3-1.jpeg" style="zoom:35%;"/>

<center>图3-1</center>   

接下来通过使用require指令引入example.com/variables。但是这一步通常有命令 go mod tidy自动完成。该命令有两个作用：

1. 引用项目需要的依赖并添加到go.mod中
2. 去掉go.mod文件中项目不需要的依赖



#### 变量声明

Go语言主要有四种类型的声明语句：var、const、type和func，分别对应变量、常量、类型和函数实体对象的声明。
