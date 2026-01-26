import * as mod from "node:os";
import { copyFile } from "node:fs/promises";

export default (getOs) => console.log(mod.cpus());

export async function handleCopyFile() {
  try {
    await copyFile("person.json", "./temp/to.json");
    console.log("copy File sucess!");
  } catch {
    console.error("copy File error!");
  }
}

export function greet(name) {
  return `Hello ${name}`;
}
