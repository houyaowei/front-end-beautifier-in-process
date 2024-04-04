package refbasiccase

import (
	"encoding/json"
	"fmt"
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
