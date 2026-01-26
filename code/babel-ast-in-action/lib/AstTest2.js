"use strict";

var _require = require("@babel/core"),
  parse = _require.parse,
  traverse = _require.traverse;
var _require2 = require("@babel/generator"),
  generate = _require2["default"];
var code = "function square(n) {\n  return n * n;\n}";
var ast = parse(code);

/**
方法一：
将code 修改为multiple，也可以用这个方法修改参数
*/
traverse(ast, {
  enter: function enter(path) {
    if (path.isIdentifier({
      name: "square"
    })) {
      path.node.name = "multiple";
    }
  }
});
//方法二：
// traverse(ast, {
//   FunctionDeclaration: function (path) {
//     path.node.id.name = "multiple";
//   },
// });

var targetCode = generate(ast);
console.log(targetCode);