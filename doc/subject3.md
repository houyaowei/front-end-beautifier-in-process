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

到这里module还不能正常工作，因为编译器还无法解析example.com/variables， 还需要在go.mod中使用replace指令告诉编译器怎么解析这个module path。

<img src="./media/ch3/3-1.jpeg" style="zoom:35%;"/>

<center>图3-1</center>   

接下来通过使用require指令引入example.com/variables。但是这一步通常有命令 go mod tidy自动完成。该命令有两个作用：

1. 引用项目需要的依赖并添加到go.mod中
2. 去掉go.mod文件中项目不需要的依赖

代码组织方式确定后，我们确定entry为入口（package main），其他每个package 名称均为文件夹名称。

下面正式开始Go之旅。



#### 变量声明

Go语言主要有四种类型的声明语句：var、const、type和func，分别对应变量、常量、类型和函数实体对象的声明。

Go中的数据类型有两类：基础数据类型和复合数据类型。

| 基础数据类型 |  复合数据类型  |
| :----------: | :------------: |
|     整型     |      数组      |
|    浮点数    |     Slice      |
|     复数     |      Map       |
|    布尔型    |     结构体     |
|    字符串    |      JSON      |
|     常量     | 文本和HTML模板 |

   字符串是一个不可修改的字节序列。字符串可以包含任意的数据，文本字符串通常被解释为采用UTF8编码的Unicode，Unicode码点对应Go语言中的rune整数类型。

```go
var name string = "houyw"
var address  = "xi'an"
fmt.Println("变量name是:", name, ", 长度:", len(name), ", 第2个字符的:", name[1])
fmt.Println("变量address的子集(字符串切片):", address[3:])
```

执行结果：

```shell
变量name是: houyw , 长度: 5 , 第2个字符的: 111
变量address的子集(字符串切片): an
```

当然也可以一次声明多个变量:

```go
var (
  age    int   = 25
  height int16 = 175
)
fmt.Println("声明多个类型, age:", age, ",height:", height)
```



如果包含的有支持Unicode字符的字符串，

```go
var strUTF8 = "hi,MBP凑活用"
var charCode, _ = utf8.DecodeRuneInString(strUTF8[13:14])
fmt.Println("字符串长度:", len(strUTF8), ",Unicode字符长度:", utf8.RuneCountInString(strUTF8), "，第14位：", charCode)
```

```shell
字符串长度: 15 ,Unicode字符长度: 9 ，第14位： 65533
```

len方法统计的是字节的长度，RuneCountInString统计的是Unicode字符数量。

在Go语言中，字符串还支持UTF8转字符串：

```go
var result = utf8.AppendRune(nil, 0x8C6B)
fmt.Println("unicode 字符串：", string(result))
```

```shell
unicode 字符串： 豫
```

常量

常量是在运行期不可修改的值，并且它们的值都是在编译期完成。每种常量的潜在类型都是基础类型，像boolean、string或数字。

```go
const pi = 3.1415926;
```

常量声明也可以使用iota常量生成器初始化，它用于生成一组以相似规则初始化的常量，但是不用每行都写一遍初始化表达式，iota默认从0开始计数，后面的依次加1。

```go
const (
  ColorRed      = iota
  ColorOrange      
  ColorYellow      
  ColorGrassland   
  ColorCyan            
  ColorBlue            
  ColorPurple      
)
```

ColorOrange为1，ColorYellow为2，依次类推。

循环

在这里，我们不再介绍和其他语言一样语法糖，只介绍Go语言中特有的语法。

for循环是比较常用的结构，range结构非常方便。可以对slice、map、数组、字符串等进行迭代循环。格式如下：

```go
for key, value := range originMap {
    newMap[key] = value
}
```

key或者value是可以省略的，如果是只想访问key，可以这样写：

```go
for key, _ := range originMap
```

如果是只想访问value，可以这样写：

```go
for _, value := range originMap
```

```go
strings := []string{"google", "bing"}
for i, v := range strings {
  fmt.Println(i, v)
}
numbers := [6]int{11, 22, 33, 55}
for i, x := range numbers {
  fmt.Printf("第 %d 位 x 的值 = %d\n", i, x)
} 
```

select语句

select 是 Go 中的一个控制结构，类似于 switch 语句，和switch不同的是select只能操作通道，监听指定通道上的操作。每一个case后必须是通道操作，要么是发送要么是接收。

```go
func TestSelectOperator() {
	c1 := make(chan string)
	c2 := make(chan int)
	go func() {
		time.Sleep(1 * time.Second)
		c1 <- "chanel c1" // 发送信号
	}()
	go func() {
		time.Sleep(2 * time.Second)
		c2 <- 1024 //发送另一个信号
	}()
	for i := 0; i < 2; i++ {
		select {
		case msg1 := <-c1:
			fmt.Println("select received string:", msg1)
		case msg2 := <-c2:
			fmt.Println("select received int:", msg2)
		}
	}
}
```

```go
select received string: chanel c1
select received int: 1024
```



不太一样的switch

在Go语言中，除了可以像JavaScript中使用switch-case的语法结构外，还支持在case中支持类型判断，具体说就是用type-switch 来判断某个 interface 变量中实际存储的变量类型。

```go
func functionOfSomeType() bool {
	return true
}
func TestTypeSwitch() {
	var t interface{}  //空接口
	t = functionOfSomeType()
	switch t := t.(type) {
	default:
		fmt.Printf("unexpected type %T\n", t)
	case bool:
		fmt.Printf("is boolean: %t\n", t)
	case int:
		fmt.Printf("is integer: %d\n", t)
	case *bool:
		fmt.Printf("pointer to boolean: %t\n", *t)
	case *int:
		fmt.Printf("pointer to integer: %d\n", *t)
	}
}
```

```shell
is boolean: true
```

在该示例中我们使用了空接口，空接口通常用来储存未知类型的值。



#### 数组

   数组是一个由固定长度的特定类型元素组成的序列，一个数组可以由零个或多个元素组成。因为数组的长度是固定的，不像在javascript中的数组有push、shift操作可以修改。

  声明固定长度的数组，并进行遍历：

```go
var scores [3]int = [3]int{100, 98, 99}
for i, s := range scores {
  fmt.Println("index :", i, "value is: ", s)
}
```

```shell
index : 0 value is:  100
index : 1 value is:  98
index : 2 value is:  99
```

不用指定长度参数，而是根据初始化数据的数量动态初始化长度字段。



#### Slice（切片）

slice是和数组类似的数据结构，但是更加灵活，功能更强大。它是可以增长和收缩的动态序列，序列中每个元素的类型必须相同。

切片初始化，和数组的字面值语法很类似，它们都是用花括弧包含一系列的初始化元素，但是对于Slice并没有指明序列的长度。一个slice由三个部分构成：指针、长度和容量。指针指向第一个slice元素对应的底层数组元素的地址，要注意的是slice的第一个元素并不一定就是数组的第一个元素。len(长度)对应slice中元素的数目；长度不能超过容量，cap(容量)一般是从slice的开始位置到结构序列的结尾位置。内置的len和cap函数分别返回slice的长度和容量。

```go
scores := []int{100, 98, 99}
fmt.Println("cap:", cap(scores), ", len:", len(scores))   //cap: 3 , len: 3
```

或者也可以根据数组生成切片：

```go
unLengthScores := [...]int{100, 98, 99, 100, 97, 96}
fmt.Println("unLengthScores' length :", len(unLengthScores))
ss := unLengthScores[1:3]
fmt.Println("ss' cap:", cap(ss), ", len:", len(ss))
```

```shell
unLengthScores' length : 6 , cap: 6
ss' cap: 5 , len: 2
```

还有一种创建Slice的方式是使用内置的make方法

```go
letters := make([]string, 5)
fmt.Println("lettters' cap:", cap(letters), ", len:", len(letters))
letters[0] = "a"
fmt.Println("lettters:", letters)
```

```shell
lettters' cap: 5 , len: 5
lettters: [a    ]
```

使用append为切片增加元素（数组）

```go
scores := []int{100, 98, 99}
appendScores := [...]int{120, 89}
for _, v := range appendScores {
  scores = append(scores, v)
}
fmt.Println("scores cap:", cap(scores), ", len:", len(scores)) //scores cap: 6 , len: 5
```

使用append为切片增加元素（Slice）

```go
scores := []int{100, 98, 99}
appendScores := []int{120, 89}
scores = append(scores, appendScores...)
fmt.Println("scores cap:", cap(scores), ", len:", len(scores)) //scores cap: 6 , len: 5
```



#### Map集合

Map是一种实用的数据结构。它是一个无序的key-value对的集合，其中所有的key都是不能重复，但是类型相同，通过给定的key可以在常数时间复杂度内检索、更新或删除对应的value。在Go语言中，map通常表示为map[K]V，其中K和V分别对应key和value。

map实例的生成方式有两种，方式一通过内置的make

```go
person := make(map[string]string)
person["name"] = "houyw"
person["address"] = "xi'an"
```

方式二通过map字面量的方法创建

```go
person2 := map[string]string{
  "name":    "houyw",
  "address": "xi'an",
}
```

map操作

```go
person["name"]  //访问
person["name"] = "hyw" //修改
delete person["address"] //删除
```



#### struct结构体

结构体是一种聚合类型，可以将多个不同类型的值汇聚到一起。如员工的信息， 员工ID可能是int型，姓名是字符串类型，薪资可能是int型，地址为字符串类型.....。我们先使用java的类表示：

```java
public class Employee {
  ID int;
	Name String;
	Address String;
	Salary int;
	ManagerID int;
	EntryTime: String;
}
```

现在我们声明一个Employ的结构体，并声明了一个Employee类型的变量person：

```go
type Employee struct {
  ID        int
  Name      string
  Age       int
  Address   string
  Salary    int
  ManagerID int
}
var person Employee
```

结构体内部也可以嵌套内部匿名结构体

```go
type Student struct {
  Name string
  Age int
  School struct {
    Name string
    Address string
    Phone string
  }
}
```

结构体的字段我们都是以大写字母开头，即可导出的变量，之所以这么写的目的是可以在另一个包中引用。可以一次性初始化所有字段，格式如下，各值需要和声明的顺序保持一致：

```
person := Employee {value1, value2, ...valuen}
```

也可以一个一个设置值：

```go
person.Age=33
person.Name="hyw"
person.ID=1065968
```

也可以对字段进行取址(&)操作。

```go
ref := &person.Address
*ref = "henan"
fmt.Println("after modified address:", person.Address) //after modified address: henan
```

结构体值也可以用结构体字面值表示，结构体字面值可以指定每个成员的值。

```go
type Point struct{ X, Y int }
p := Point{1, 2}
```

以定义指向结构体的指针类似于其他指针变量，即结构体指针，存储的是结构体变量的地址。格式如：

```go
var person_pointer *Employee = &person
fmt.Println("get Name by Pointer:", person_pointer.Name) //get Name by Pointer: houyw
```

结构体也可以不包含任何字段，称为空结构体，表示为struct{}，虽然定义一个空的结构体并没有太大的意义，但在并发编程中，channel之间的通讯，可以使用一个struct{}作为信号量。

```go
ch := make(chan struct{})
ch <- struct{}{}
```



Tags

在定义结构体字段时，除字段名称和数据类型外，还可以使用反引号( `` )为结构体字段声明元信息，这种元信息称为Tag，用于编译阶段关联到字段当中，最常用的就是序列化与反序列化，需要注意的是要额外引入包"encoding/json"，否则也无法解析。

```go
type User struct {
		Name     string `json:"name"`
		Password string `json:"password"`
		Age      int    `json:"age"`
		Address  string `json:"address"`
	}

	user := User{Name: "houyw", Age: 18}
	bs, _ := json.Marshal(user) // 序列化
	fmt.Println(string(bs))
	new_person := User{}
	_ = json.Unmarshal(bs, &new_person) // 反序列化
	fmt.Println(new_person)
```

```shell
{"name":"houyw","password":"","age":18,"address":""}
{houyw  18 }
```

