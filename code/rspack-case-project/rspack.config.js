const rspack = require("@rspack/core");
const { VueLoaderPlugin } = require("vue-loader");
// const  { pluginRem } = require('@rsbuild/plugin-rem');
const path = require("path");

const isDev = process.env.NODE_ENV == "development";

/** @type {import('@rspack/cli').Configuration} */
const config = {
	context: __dirname,
	entry: {
		main: "./src/main.js"
	},
	output: {
		filename: "bundle.[hash].js"
	},
	resolve: {
		extensions: [".vue", '.js'],
		alias: {
			"@": path.resolve(__dirname, 'src')
		}
	},
	devServer: {
		port: 5177
	},
	devtool: false,
	plugins: [
		new VueLoaderPlugin(),
		new rspack.HtmlRspackPlugin({
			template: "./index.html"
		})
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
				options: {
					experimentalInlineMatchResource: true
				}
			},
			{
				test: /\.(js|ts)$/,
				use: [
					{
						loader: "builtin:swc-loader",
						options: {
							env: {
								targets: [
									"chrome >= 87",
									"edge >= 88",
									"firefox >= 78",
									"safari >= 14"
								]
							}
						}
					}
				]
			},
			{
				test: /\.svg/,
				type: "asset/resource"
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'less-loader',
					}
				],
				type: 'css',
			}
		]
	},
	builtins: {
		banner: [{
			banner: 'Copyright@houyw, 2023-present',
			footer: true,
		}]
	}
};
module.exports = config;
