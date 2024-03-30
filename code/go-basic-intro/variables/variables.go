package variables

import (
	"fmt"
	"unicode/utf8"
)

func TestVariablesDeclaration() {
	var name = "houyw"
	var address = "xi'an"
	fmt.Println("变量name是:", name, ", 长度:", len(name), ", 第2个字符的:", name[1])
	fmt.Println("变量address的子集(字符串切片):", address[3:])

	var strUTF8 = "hi,MBP凑活用"
	var charCode, _ = utf8.DecodeRuneInString(strUTF8[13:14])
	fmt.Println("字符串长度:", len(strUTF8), ",Unicode字符长度:", utf8.RuneCountInString(strUTF8), "，第14位：", charCode)

	var result = utf8.AppendRune(nil, 0x8C6B)
	fmt.Println("unicode 字符串：", string(result))
}
