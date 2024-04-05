package funcs

import (
	"fmt"
	"math"
	"strconv"
)

// 返回一个参数
func display(x int, y int) int {
	fmt.Printf("display(): %d, %d \n", x, y)
	return x + y
}

// 返回两个参数
func display2(x int, y int) (int, string) {
	fmt.Printf("display(): %d, %d \n", x, y)
	d := x + y
	return d, strconv.Itoa(d)
}
func TestFuncs() {
	d := display(2, 3)
	fmt.Println("result d:", d)

	e, f := display2(4, 5)
	fmt.Println("result : ", e, ", string:", f)
}

func handleSlice(s *[]string) {
	*s = append(*s, "m")
	fmt.Printf("after slice: %v \n", *s)
}
func TestSliceFuncs() {
	letters := [...]string{"a", "b", "c", "d"}
	s := letters[1:]

	handleSlice(&s)
	fmt.Println("origin slice s:", s)
}
func modify(arr []int) {
	fmt.Printf("inner1: %p, %p\n", &arr, &arr[0])
	arr[0] = 10
	fmt.Printf("inner2: %p, %p\n", &arr, &arr[0])
}

func TestSliceFuncs2() {
	arr := make([]int, 0)
	arr = append(arr, 1, 2, 3)
	fmt.Printf("outer1: %p, %p\n", &arr, &arr[0])
	modify(arr)
	fmt.Println(arr) // 10, 2, 3
}

func handleMap(m map[string]string) {
	m["address"] = "xi'an"
	fmt.Printf("map in handleMap: %v \n", m)
}
func TestMapFuncs() {
	m := make(map[string]string)
	m["name"] = "houyw"
	handleMap(m)
	fmt.Println("after map:", m)
}

func TestAnonymousFuncs() {
	getSqrt := func(a float64) float64 {
		return math.Sqrt(a)
	}
	fmt.Println(getSqrt(16))

	fns := [](func(x int) int){
		func(x int) int { return x + 5 },
		func(x int) int { return x * x },
		func(x int) int { return x - 2 },
	}
	fmt.Println(fns[2](50))
}

// 闭包
func closure() func() int {
	i := 10
	b := func() int {
		i++
		fmt.Println(i)
		return i
	}
	return b
}
func TestClosure() {
	closureInner := closure()
	closureInner()
	closureInner()
}
