import { parse } from "@swc/core";
import { readFileSync } from "node:fs";
// const file = require("file");

const code = readFileSync("./es.js");
console.log(code.toString());

parse(code.toString(), {
  syntax: "ecmascript",
  comments: false,
  script: true,
  target: "es5",
  isModule: true,
}).then((module) => {
  console.log("-----------module.type-----------");
  console.log(module.type);
  console.log("-----------module.body-----------");
  console.log(module.body);
});
