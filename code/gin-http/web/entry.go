package web

import (
	"github.com/gin-gonic/gin"
)

// app初始化
var app = gin.Default()

func WebEntry() {

	app.SetTrustedProxies([]string{"127.0.0.1"})
	registerRoutes()
	app.Run(":8000")
}
func registerRoutes() {
	userGroup := app.Group("/user")
	registerUserRouters(userGroup)
	newsGrous := app.Group("/news")
	registerNewsRoutes(newsGrous)
}
