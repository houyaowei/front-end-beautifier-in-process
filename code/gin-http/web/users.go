package web

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

type userIdS struct {
	ID string `form:"id"`
}
type users struct {
	ID    string `json:"id"`
	Title string `json:"title"`
	Name  string `json:"name"`
	Age   string `json:"age"`
}

var us = []users{
	{ID: "1", Title: "Scientist", Name: "钱学森", Age: "100+"},
	{ID: "2", Title: "Scientist", Name: "邓稼先", Age: "90+"},
	{ID: "3", Title: "Scientist", Name: "钱三强", Age: "90+"},
	{ID: "4", Title: "Scientist", Name: "于敏", Age: "90+"},
}

func registerUserRouters(rg *gin.RouterGroup) {
	rg.GET("/", getAllUsers)
	rg.GET("/:id", getFilterUsers)
	rg.POST("/add", saveUser)
}

// 保存用户
func saveUser(ctx *gin.Context) {
	var u users
	fmt.Println("aa")
	//BindJSON:将传进来的参数转为user对象，参数用body传
	if err := ctx.BindJSON(&u); err != nil {
		fmt.Print(err)
		return
	}
	fmt.Printf("u: %+v \n", u)
	us = append(us, u)
	ctx.IndentedJSON(http.StatusCreated, us)
}

// 过滤用户
func getFilterUsers(ctx *gin.Context) {
	// var userId = ctx.Params.ByName("id") //取参数也可以用这种
	var userId = ctx.Param("id")
	fmt.Print("param is:", userId)
	for _, u := range us {
		if u.ID == userId {
			ctx.IndentedJSON(http.StatusOK, u)
		}
	}
}

// 查询所有用户
func getAllUsers(ctx *gin.Context) {
	var u userIdS

	if err := ctx.ShouldBind(&u); err != nil {
		fmt.Print("bind error")
	} else {
		fmt.Printf("param is: %s", u.ID)
	}
	ctx.IndentedJSON(http.StatusOK, us)
}
