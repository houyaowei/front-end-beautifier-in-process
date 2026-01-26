package refbasiccase

import (
	"encoding/json"
	"fmt"
	"reflect"
	"sort"
	"time"
)

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
func TestSlice2() {
	//2维数组
	context2D := make([][]string, 2)
	context2D[0] = []string{"hello", "go", "!"}
	context2D[1] = []string{"best", "wishes", "!"}
	fmt.Println("context2D:", context2D)
}
func TestDelSlice() {
	nums := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	//删除头部元素
	//nums = append(nums[5:])
	//删除尾部元素
	//nums = append(nums[:4])
	//删除中间某一个元素
	nums = append(nums[:2], nums[3:]...)
	fmt.Println("nums:", nums)
}
func TestSliceSort() {
	floatNums := []float64{1.1, 0.5, 30.4, 6, 4.2, 0.64, 12.4}
	sort.Float64s(floatNums)
	fmt.Println("floatNums:", floatNums)
	sort.Sort(sort.Reverse(sort.Float64Slice(floatNums)))
	fmt.Println("floatNums reverse:", floatNums)
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
func TestMapLoop() {
	mapValues := make(map[string]string)
	mapValues["name"] = "houyw"
	mapValues["address"] = "xi'an"

	for k, v := range mapValues {
		fmt.Printf("key=%s, value=%s\n", k, v)
	}
}
func TestStruct() {
	type Employee struct {
		ID        int
		Name      string
		Address   string
		Salary    int
		ManagerID int
	}
	//var person Employee = Employee{610001, "houyw", "xi'an", 26, 51000}
	var person Employee = Employee{ID: 610001, Address: "xi'an", Salary: 26, ManagerID: 51000}
	fmt.Println("name:", person.Name)

	ref := &person.Address
	*ref = "henan"
	fmt.Println("after modified address:", person.Address)

	var person_pointer *Employee = &person
	fmt.Println("get Name by Pointer:", person_pointer.Name)

}
func TestStructValue() {
	//结构体字面值
	type Location struct {
		Lon,
		Lat float64
	}
	loc := Location{32.11222, 43.222}
	loc2 := Location{Lon: 44.2193356, Lat: 223.22} //这种形式的可以初始化部分字段

	fmt.Println("x:", loc.Lon)
	fmt.Println("x in loc2:", loc2.Lat)
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

	fmt.Println("------------reflect test------")
	ts := reflect.TypeOf(user)
	fmt.Println("Field 个数:", ts.NumField())
	for i := 0; i < ts.NumField(); i++ {
		f := ts.Field(i)
		fmt.Println(f.Name, f.Tag.Get("json"))
	}

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

func (a Animal) Barking() {
	fmt.Println(a.Name + " is barking...")
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
			Name:   "德牧",
			Color:  "orange",
			Weight: 30,
			Height: 50,
			Age:    3.5,
		},
	}
	fmt.Println(dog.Detail.Name)
	dog.Detail.Barking()
	dog.Detail.Eatting()
}
