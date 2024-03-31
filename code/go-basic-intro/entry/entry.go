package main

//模块调用一定要https://golang.google.cn/doc/tutorial/call-module-code
import (
	"example.com/greetings"
	"example.com/variables"
	"fmt"
)

func main() {
	message := greetings.Hello("houyw")
	fmt.Println(message)
	//variables.TestVariablesDeclaration()
	variables.TestComplexType()
	//variables.TestSlice()
}
