package variables

import (
	"fmt"
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
