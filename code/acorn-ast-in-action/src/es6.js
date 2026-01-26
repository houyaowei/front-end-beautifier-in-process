// const s = new Set();
// [2, 3, 5, 4, 5, 2, 2].forEach((x) => s.add(x));

// for (let i of s) {
//   console.log(i);
// }

let _name = "hyw";
const speak = (p = "", content) => {
  if (p) {
    console.log(`${p} said:`, content);
  } else {
    console.log("emo! everyone keep slient");
  }
};

speak(_name, "hello,rust~");
speak({}, "hello,rust~");
