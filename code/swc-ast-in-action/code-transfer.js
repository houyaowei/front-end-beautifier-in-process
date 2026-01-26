import { parse, print } from "@swc/core";
import { Visitor } from "@swc/core/Visitor.js";
import { readFileSync } from "node:fs";
// const file = require("file");

const codeOrigin = readFileSync("./es2.js");
// console.log(code.toString());

const ast = await parse(codeOrigin.toString(), {
  syntax: "ecmascript",
  comments: false,
  script: true,
  target: "es5",
  isModule: true,
});

// console.log(ast.body);
for (const item of ast.body) {
  // 找到所有的 export const/let/var ...
  if (
    item.type === "ExportDeclaration" &&
    item.declaration.type === "VariableDeclaration"
  ) {
    for (const decl of item.declaration.declarations) {
      // 找到所有的 export const name = ...
      if (decl.id.type === "Identifier") {
        const name = decl.id.value;
        //缓存原函数结构，用来生成新函数的构造
        const initOrigin = decl.init;
        // 找到所有的箭头函数
        if (decl.init && decl.init.type === "ArrowFunctionExpression") {
          // console.log(decl);
          // 将找到的结果输出
          console.log(`found: ${name}`);
          decl.init = {
            type: "FunctionExpression",
            params: initOrigin.params,
            body: {
              type: "BlockStatement",
              body: initOrigin.body,
              start: initOrigin.body.start,
              end: initOrigin.body.end,
            },
            start: initOrigin.start,
            end: initOrigin.end,
          };
        }
      }
    }
  }
}
async function generatCode() {
  console.log(ast.body);
  const { code } = await print(ast);
  console.log("result code:", code);
}
generatCode();
