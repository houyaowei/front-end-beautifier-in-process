package standard

import "fmt"

func TestFmt() {
	name := "houyw"
	age := 18
	s2 := fmt.Sprintf("name:%s,age:%d", name, age)
	fmt.Println(s2)
}
