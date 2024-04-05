package methods

import "fmt"

type User struct {
	Name  string
	Email string
}

//func (u User) Notify() {
//	fmt.Printf("name: %v , email: %v \n", u.Name, u.Email)
//	fmt.Printf("value type: %p \n", &u)
//}

func (u *User) Notify() {
	fmt.Printf("name: %v , email: %v \n", u.Name, u.Email)
	fmt.Printf("pointer type : %p \n", u)
}
func TestFunctions() {
	u1 := User{"houyw", "houyaowei@163.com"}
	u1.Notify()
	// 通过指针类型调用方法
	u2 := User{"314254791", "314254791@qq.com"}
	u3 := &u2
	u3.Notify()
}
