// import getOs from "./node_integration.ts";
import { telDesensitization } from "javascript-common-tools";

function greeter(person: Person) {
  return "I'm " + person.name + ", " + person.age + " years old.";
}

let _name: string = "houyw";
let _age: number = 18;

let info = greeter({
  name: _name,
  age: _age,
});

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
// @ts-ignore
if (import.meta.main) {
  // getOs();
  console.log(info);
  console.log(telDesensitization("13599999999", 2));
}
