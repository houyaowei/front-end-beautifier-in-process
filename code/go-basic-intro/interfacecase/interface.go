package interfacecase

import "fmt"

type Animal interface {
	say()
	run()
}
type Dog struct{}

// dog实现Animal接口
func (d Dog) say() {
	fmt.Println("dog is barking")
}
func (d Dog) run() {
	fmt.Println("dog is running")
}
func TestInterface() {
	var dog Animal = Dog{}
	dog.say()
	dog.run()
}

// interface compose
type Sayer interface {
	say()
}

type Mover interface {
	move()
}

// 接口嵌套
type Animal2 interface {
	Sayer
	Mover
}
type Duck struct {
	name string
}

func (c Duck) say() {
	fmt.Println("duck is quacking...")
}

func (c Duck) move() {
	fmt.Printf("duck %s can move \n", c.name)
}

func TestInterfaceCompose() {
	var x Animal2
	x = Duck{name: "Huahua"}
	x.move()
	x.say()
}
func TestEmptyInterface() {
	// 空接口作为map值
	var studentInfo = make(map[string]interface{})
	studentInfo["name"] = "娃哈哈"
	studentInfo["age"] = 18
	studentInfo["married"] = false
	fmt.Println(studentInfo)
}
