import esbuild from "rollup-plugin-esbuild";
import dts from "rollup-plugin-dts";
import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import type { RollupOptions, OutputOptions } from "rollup";
// import { minify as minifySwc } from "@swc/core";
import swc from "@rollup/plugin-swc";

const configs: RollupOptions[] = [];
const esbuildPlugin = esbuild({ target: "esnext" });
const dtsPlugin = [dts()];
//原数据
import { packages } from "../meta/packages";
const externals: any[] = [];

const isProd = process.env.NODE_ENV == "prod";

packages.forEach((pack) => {
  const { globals, name, external, iife, build, cjs, mjs, dts, target } = pack;

  //global方式
  const iifeGlobals = {
    "@smart-tracking-sdk/core": "smartTracking",
    ...(globals || {}),
  };
  const iifeName = "WebTracing";
  //global方式配置结束

  const fn = "index";
  const input = `packages/${name}/index.ts`;
  const output: OutputOptions[] = [];

  if (mjs !== false) {
    output.push({
      file: `packages/${name}/dist/${fn}.mjs`,
      format: "es",
    });
  }

  if (cjs !== false) {
    output.push({
      file: `packages/${name}/dist/${fn}.cjs`,
      format: "cjs",
    });
  }

  if (iife !== false) {
    output.push(
      {
        file: `packages/${name}/dist/${fn}.iife.js`,
        format: "iife",
        name: iifeName,
        extend: true,
        globals: iifeGlobals,
      },
      {
        file: `packages/${name}/dist/${fn}.iife.min.js`,
        format: "iife",
        name: iifeName,
        extend: true,
        globals: iifeGlobals,
        plugins: [swc()],
      },
    );
  }

  configs.push({
    input,
    output,
    plugins: [
      commonjs(),
      nodeResolve(),
      json(),
      target ? esbuild({ target }) : esbuildPlugin,
    ],
    external: [...externals, ...(external || [])],
  });

  if (dts !== false) {
    configs.push({
      input,
      output: {
        file: `packages/${name}/dist/${fn}.d.ts`,
        format: "es",
      },
      plugins: dtsPlugin,
      external: [...externals, ...(external || [])],
    });
  }
});
