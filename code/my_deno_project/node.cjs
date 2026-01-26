const path = require("node:path");
const greeting = require("./node_integration");

console.log(greeting.greet("hyw"));

module.exports = {
  joinPath: function () {
    console.log(path.join(__dirname, ""));
  },
};
