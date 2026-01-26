module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: "3.40.0",
      },
    ],
  ];
  const plugins = ["@babel/plugin-transform-runtime"];

  return { presets, plugins };
};
