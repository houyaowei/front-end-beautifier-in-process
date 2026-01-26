"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _javascriptValidateUtils = require("javascript-validate-utils");
var name = "houyw";
var speak = function speak() {
  var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var content = arguments.length > 1 ? arguments[1] : undefined;
  if ((0, _javascriptValidateUtils.isString)(p)) {
    console.log("".concat(p, " said:"), content);
  } else {
    console.log("emo! everyone keep slient");
  }
};
speak(name, "hello,rust~");
speak({}, "hello,rust~");
var _default = exports["default"] = speak;