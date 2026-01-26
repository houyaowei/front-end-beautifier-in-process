let { parse, traverse } = require("@babel/core");
let { default: generate } = require("@babel/generator");
const bbt = require("@babel/types");

const code = `function square(n) {
  return n * n;
}`;

const ast = parse(code);

/**
方法一：
将code 修改为multiple，也可以用这个方法修改参数
*/
// traverse(ast, {
//   enter(path) {
//     // console.log("-------enter-------");
//     // console.log("path:", path);
//     //可以使用path直接判断 path.isIdentifier({ name: "square" })
//     //也可以使用@babel/types判断,其实是一个东西
//     if (bbt.isIdentifier(path.node) && path.node.name == "square") {
//       path.node.name = "multiple";
//     }
//   },
//   exit(path) {
//     // console.log("-------exit-------");
//     // console.log("path:", path);
//   },
// });
//方法二：
traverse(ast, {
  FunctionDeclaration: function (path) {
    console.log("path:", path);
    path.node.id.name = "multiple";
  },
});

let targetCode = generate(ast);
console.log(targetCode);
