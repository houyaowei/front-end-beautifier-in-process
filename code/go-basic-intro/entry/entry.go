package main

import (
	"example.com/greetings"
	"example.com/interfacecase"
	"fmt"
)

func main() {
	message := greetings.Hello("houyw")
	fmt.Println(message)
	//variables.TestVariablesDeclaration()
	//variables.TestComplexType()
	//refbasiccase.TestSlice()
	//refbasiccase.TestMap()
	//refbasiccase.TestStruct()
	//refbasiccase.TestSelectOperator()
	//refbasiccase.TestTypeSwitch()
	//refbasiccase.TestStructTags()
	//refbasiccase.TestStructCompose()
	//refbasiccase.TestStructAndMap()
	//interfacecase.TestInterface()
	interfacecase.TestInterfaceCompose()
	interfacecase.TestEmptyInterface()
}
