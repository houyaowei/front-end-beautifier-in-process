package main

//模块调用一定要https://golang.google.cn/doc/tutorial/call-module-code
import (
    "fmt"
		"example.com/greetings"
)

func main() {
    message := greetings.Hello("Gladys")
    fmt.Println(message)
}