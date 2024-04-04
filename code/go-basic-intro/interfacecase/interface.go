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
}
