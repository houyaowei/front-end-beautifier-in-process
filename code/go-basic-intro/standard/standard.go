package standard

import (
	"fmt"
	"reflect"
	"strconv"
)

func TestFmt() {
	name := "houyw"
	age := 18
	s2 := fmt.Sprintf("name:%s,age:%d", name, age)
	fmt.Println(s2)
	fmt.Printf("65对应8进制数: %o \n", 65)
	fmt.Printf("10表示为2进制：%b \n", 10)
	fmt.Printf("100表示为16进制：%x \n", 100)
	fmt.Printf("变量age的地址：%p \n", &age)
	s := struct {
		name string
	}{
		"houyw",
	}
	fmt.Printf("默认显示： %v\n", s)
	fmt.Printf("显示属性： %+v\n", s)
	fmt.Printf("Go语法表示：%#v\n", s)
	fmt.Printf("%T\n", s)
}

func TestStrconv() {
	s1 := "100x"
	i1, err := strconv.Atoi(s1)
	if err != nil {
		fmt.Println("can't convert to int")
	} else {
		fmt.Printf("type:%T value:%#v\n", i1, i1) //type:int value:100
	}
	i2 := 200
	s2 := strconv.Itoa(i2)
	fmt.Printf("value:%#v\n", s2)

	p1, _ := strconv.ParseBool("False")
	fmt.Println("p1:", p1)
	p2, _ := strconv.ParseBool("1")
	fmt.Println("p2:", p2)

	p3, err2 := strconv.ParseInt("23", 10, 10)
	if err2 != nil {
		fmt.Println("can't convert to int")
	} else {
		fmt.Printf("type:%T value:%#v\n", p3, p3) //type:int value:100
	}
	fmt.Println("p3:", p3)

	f1 := strconv.FormatBool(false)
	fmt.Println(f1)
	f2 := strconv.FormatInt(87, 16)
	fmt.Println(f2)
}

func getReflectType(a interface{}) {
	//获取类型信息用reflect.TypeOf,获取值类型使用: reflect.ValueOf
	t := reflect.TypeOf(a)
	fmt.Println("type is：", t)
	k := t.Kind()
	switch k {
	case reflect.Float64:
		fmt.Printf("param is float64\n")
	case reflect.String:
		fmt.Println("param is string")
	}
}

func TestReflect() {
	name := "houyw"
	getReflectType(name)
}
