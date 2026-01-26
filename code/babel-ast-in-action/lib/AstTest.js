"use strict";

var parser = require("@babel/parser");
var _require = require("@babel/traverse"),
  traverse = _require["default"];
var _require2 = require("@babel/generator"),
  generate = _require2["default"];
var types = require("@babel/types");
var fs = require("fs");
var path = require("path");
var code = "";
try {
  var originCode = fs.readFileSync(path.resolve(__dirname + "/es.js"));
  code = originCode.toString(); //buffer to string
  // console.log(code);
} catch (e) {
  console.log(e);
}
var ast = parser.parse(code, {
  sourceType: "module"
});

// console.log("ast:", ast);

traverse(ast, {
  ArrowFunctionExpression: function ArrowFunctionExpression(path, state) {
    console.log("path:", path);
    var node = path.node;
    var id = path.parent.id;
    var params = node.params;
    var body = types.blockStatement([node.body]);
    var functionExpression = types.functionExpression(id, params, body, false, false);
    path.replaceWith(functionExpression);
  }
});
var targetCode = generate(ast);
console.log(targetCode);