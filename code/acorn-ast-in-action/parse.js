const acorn = require("acorn");
const fs = require("fs");
const path = require("path");
// const walk = require("acorn-walk");
// const AstTypes = require("ast-types");
const astring = require("astring");
// const types = require("@babel/types");
const escodegen = require("escodegen");

let code = "";
try {
  const originCode = fs.readFileSync(path.resolve(__dirname + "/src/es6.js"));
  code = originCode.toString(); //buffer to string
} catch (e) {
  throw new Error(e);
}
const ast = acorn.parse(code, {
  ecmaVersion: "6",
  allowReserved: true,
  sourceType: "module",
});
// console.log("------ast-----");
// console.log(ast);
// 遍历所有节点
// walk.full(ast, (node) => {
//   console.log(`There's a ${node.type} node at ${node}`);
// });

// walk.ancestor(ast, {
//   ArrowFunctionExpression(_node, _state, ancestors) {
//     console.log("current _state is:", _state);

//     const _params = _node.params;
//     const _body = _node.body;
//     const funCode = escodegen.generate({
//       type: "FunctionDeclaration",
//       params: _params,
//       body: _body,
//     });
//     //no method to append origin ast
//   },
// });

const customGenerator = Object.assign({}, astring.GENERATOR, {
  ArrowFunctionExpression: function (node, state) {
    const _params = node.params;
    const _body = node.body;

    // let body = types.blockStatement([_body]);
    // let functionExpression = types.functionExpression(
    //   {
    //     type: "Identifier",
    //     name: node.name,
    //   },
    //   _params,
    //   _body,
    //   false,
    //   false,
    // );
    // console.log("aa:", functionExpression);
    // node.body = functionExpression;

    const funCode = escodegen.generate({
      type: "FunctionDeclaration",
      params: _params,
      body: _body,
    });
    state.write(funCode);
  },
});
const generatoredCode = astring.generate(ast, {
  generator: customGenerator,
});
console.log("generator code:", generatoredCode);

//ast-types不兼容acorn
// AstTypes.visit(ast, {
//   ArrowFunctionExpression(path) {
//     console.log(path);
//   },
// });
