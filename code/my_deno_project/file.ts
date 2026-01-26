//read json file

//@ts-ignore
const text = Deno.readTextFile("./person.json");
text.then((response) => console.log(response));

//copy json file
// Deno.mkdirSync("./temp");
// Deno.copyFile("./person.json", "./temp/to.json");

Deno.lstat("./temp/to.json").then((res) => {
  console.log(res);
});
