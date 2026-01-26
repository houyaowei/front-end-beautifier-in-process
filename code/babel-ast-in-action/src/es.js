import { isString } from "javascript-validate-utils";

let name = "houyw";
const speak = (p = "", content) => {
  if (isString(p)) {
    console.log(`${p} said:`, content);
  } else {
    console.log("emo! everyone keep slient");
  }
};

speak(name, "hello,rust~");
speak({}, "hello,rust~");

export default speak;
