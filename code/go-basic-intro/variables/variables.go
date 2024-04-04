package variables

import (
	"encoding/json"
	"fmt"
	"time"
	"unicode/utf8"
)

func TestVariablesDeclaration() {
	var name string = "houyw"
	var address = "xi'an"
	fmt.Println("变量name是:", name, ", 长度:", len(name), ", 第2个字符的:", name[1])
	fmt.Println("变量address的子集(字符串切片):", address[3:])
	var (
		age    int   = 25
		height int16 = 175
	)
	fmt.Println("声明多个类型, age:", age, ",height:", height)

	var strUTF8 = "hi,MBP凑活用"
	var charCode, _ = utf8.DecodeRuneInString(strUTF8[13:14])
	fmt.Println("字符串长度:", len(strUTF8), ",Unicode字符长度:", utf8.RuneCountInString(strUTF8), "，第14位：", charCode)

	var result = utf8.AppendRune(nil, 0x8C6B)
	fmt.Println("unicode 字符串：", string(result))

	const PI = 3.1415926

}

func TestComplexType() {
	var scores [3]int = [3]int{100, 98, 99}
	for i, s := range scores {
		fmt.Println("index :", i, "value is: ", s)
	}
	fmt.Println("subset scores :", scores[1:2])
	//简短变量声明
	unLengthScores := [...]int{100, 98, 99, 100, 97, 96}
	fmt.Println("unLengthScores' length :", len(unLengthScores), ", cap:", cap(unLengthScores))

	ss := unLengthScores[1:3]
	fmt.Println("ss' cap:", cap(ss), ", len:", len(ss))
}

func TestSlice() {
	scores := []int{100, 98, 99}
	fmt.Println("cap:", cap(scores), ", len:", len(scores))

	appendScores := [...]int{120, 89}
	for _, v := range appendScores {
		scores = append(scores, v)
	}
	//scores = append(scores, appendScores...)
	fmt.Println("scores cap:", cap(scores), ", len:", len(scores))

	letters := make([]string, 5)
	fmt.Println("lettters' cap:", cap(letters), ", len:", len(letters))
	letters[0] = "a"
	fmt.Println("lettters:", letters)
}

func TestMap() {
	person := make(map[string]string)
	person["name"] = "houyw"
	person["address"] = "xi'an"

	//person2 := map[string]string{
	//	"name":    "houyw",
	//	"address": "xi'an",
	//}
	fmt.Println("person.name is:", person["name"])
	person["name"] = "hyw"
	fmt.Println("person.name is:", person["name"])
	delete(person, "address")
	fmt.Println("person.name is:", person)
}
func TestStruct() {
	type Employee struct {
		ID        int
		Name      string
		Address   string
		Salary    int
		ManagerID int
	}
	var person Employee = Employee{610001, "houyw", "xi'an", 26, 51000}
	fmt.Println("name:", person.Name)

	ref := &person.Address
	*ref = "henan"
	fmt.Println("after modified address:", person.Address)

	var person_pointer *Employee = &person
	fmt.Println("get Name by Pointer:", person_pointer.Name)

}

func TestForLoop() {
	strings := []string{"google", "bing"}
	for i, v := range strings {
		fmt.Println(i, v)
	}
	numbers := [6]int{11, 22, 33, 55}
	for i, x := range numbers {
		fmt.Printf("第 %d 位 x 的值 = %d\n", i, x)
	}
}
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
func functionOfSomeType() bool {
	return true
}
func TestTypeSwitch() {
	var t interface{} //空接口
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

func TestStructTags() {
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
}
func TestStructAndMap() {
	type Vertex struct {
		Lat, Long float64
	}
	var m map[string]Vertex
	m = make(map[string]Vertex)
	m["baidu"] = Vertex{
		40.68433, -74.39967,
	}
	fmt.Println(m["baidu"])

}

type Animal struct {
	Name   string
	Color  string
	Height float32
	Weight float32
	Age    float32
}
type Position struct {
	Lat, Long int
}

func (a Animal) Runing() {
	fmt.Println(a.Name + " is running...")
}
func (a Animal) Eatting() {
	fmt.Println(a.Name + " is eating...")
}

func TestStructCompose() {
	type Dog struct {
		ID     int
		Pos    Position
		Detail Animal
	}
	var dog = Dog{
		ID: 1001,
		Pos: Position{
			2, 4,
		},
		Detail: Animal{
			Name:   "Labrador",
			Color:  "orange",
			Weight: 30,
			Height: 50,
			Age:    3.5,
		},
	}
	fmt.Println(dog.Detail.Name)
	dog.Detail.Runing()
	dog.Detail.Eatting()
}
