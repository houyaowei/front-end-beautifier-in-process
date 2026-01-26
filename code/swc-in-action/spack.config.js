const { config } = require("@swc/core/spack");

module.exports = config({
  entry: {
    es: "./src/es.js",
  },
  mode: "debug",
  target: "browser",
  output: {
    path: "./lib/",
  },
  module: {},
  options: {},
});
