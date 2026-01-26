import { copy } from "@std/fs";
import { join } from "@std/path";

// await copy("person.json", join("temp", "person.json"));

import * as cases from "@luca/cases";
console.log(cases.splitPieces("helloWorld")); // ["hello", "world"]
console.log(cases.camelCase("hello world")); // "helloWorld"
console.log(cases.snakeCase("helloWorld")); // "hello_world"
console.log(cases.kebabCase("hello_world")); // "hello-world"
console.log(cases.titleCase("hello-world")); // "Hello World"
console.log(cases.pascalCase(["hello", "world"])); // "HelloWorld"
console.log(cases.constantCase("hello world")); //HELLO_WORLD
