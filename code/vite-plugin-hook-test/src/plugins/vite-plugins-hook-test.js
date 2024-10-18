export default function VitePluginsHookTest() {
  return {
    name: "vite-plugin-hook-test",
    enforce: "pre",
    apply: "build",
    config(config, env) {
      console.log("hook config() invoked");
    },
    configureServer() {
      console.log("hook configureServer() invoked");
    },
    buildStart(options) {
      console.log("hook buildStart() invoked");
    },
    buildEnd(options) {
      console.log("hook buildEnd() invoked");
    },
    load() {
      console.log("hook load() invoked");
    },
    transform(code, id) {
      console.log("hook transform() invoked");
    },
    resolveId(source, importer, options) {
      // console.log("resolveId,source:", source);
      // console.log("importer:", importer);
      // console.log("options:", options);
      console.log("hook resolveId() invoked");
    },
    transformIndexHtml(html) {
      console.log("hook transformIndexHtml() invoked");
    },
    renderChunk() {
      console.log("hook renderChunk() invoked");
    },
    closeBundle() {
      console.log("hook closeBundle() invoked");
    },
  };
}
