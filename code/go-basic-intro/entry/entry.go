package main

import (
	"example.com/greetings"
	"example.com/variables"
	"fmt"
)

func main() {
	message := greetings.Hello("houyw")
	fmt.Println(message)
	//variables.TestVariablesDeclaration()
	//variables.TestComplexType()
	//variables.TestSlice()
	//variables.TestMap()
	//variables.TestStruct()
	//variables.TestSelectOperator()
	//variables.TestTypeSwitch()
	variables.TestStructTags()
}
