let parser = require("@babel/parser");
let { default: traverse } = require("@babel/traverse");
const { default: generate } = require("@babel/generator");
let types = require("@babel/types");
const fs = require("fs");
const path = require("path");

let code = "";
try {
  const originCode = fs.readFileSync(path.resolve(__dirname + "/es.js"));
  code = originCode.toString(); //buffer to string
  // console.log(code);
} catch (e) {
  console.log(e);
}

let ast = parser.parse(code, {
  sourceType: "module",
});

// console.log("ast:", ast);

traverse(ast, {
  ArrowFunctionExpression: (path, state) => {
    console.log("path:", path);
    let node = path.node;
    let id = path.parent.id;
    let params = node.params;
    let body = types.blockStatement([node.body]);
    let functionExpression = types.functionExpression(
      id,
      params,
      body,
      false,
      false,
    );
    path.replaceWith(functionExpression);
  },
});

let targetCode = generate(ast);
console.log(targetCode);
