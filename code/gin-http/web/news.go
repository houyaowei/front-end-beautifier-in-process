package web

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func registerNewsRoutes(rg *gin.RouterGroup) {
	rg.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, "news")
	})
	rg.GET("/comments", func(c *gin.Context) {
		c.JSON(http.StatusOK, "news comments")
	})
}
