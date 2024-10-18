const rspack = require("@rspack/core");
const { VueLoaderPlugin } = require("vue-loader");
// const  { pluginRem } = require('@rsbuild/plugin-rem');
const path = require("path");

const isDev = process.env.NODE_ENV == "development";

console.log("publicPath in env file: ", process.env.NODE_ENV );

/** @type {import('@rspack/cli').Configuration} */
const config = {
	context: __dirname,
	entry: {
		main: "./src/main.js"
	},
	output: {
		globalObject: 'self',
		filename: '[name].[contenthash:8].bundle.js',
		chunkFilename: '[name].[contenthash:8].bundle.js',
		path: path.resolve(__dirname, 'dist'),
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
		}),
		new rspack.BannerPlugin({
			banner: "Test Banner",
			footer: true
		}),
		new rspack.ProvidePlugin({
			ProviderComponent: path.resolve(path.join(__dirname, "src/utils/utils.js"))
		})
	],
	optimization: {
		sideEffects: true,
		splitChunks: {
			chunks: 'all',
			minChunks: 1,
			minSize: 500 * 1024,
			maxSize: 1000 * 1024,
			maxAsyncRequests: 30,
			maxInitialRequests: 30,
			cacheGroups: {
				core: {
				  chunks: 'all',
				  test: /[\\/]node_modules[\\/](vue|vue-router|pinia)/,
				  priority: 100,
				  name: 'core',
				  reuseExistingChunk: true,
				},
				vendors: {
				  chunks: 'all',
				  test: /[\\/]node_modules[\\/]/,
				  priority: 10,	
				  name: 'vendors',
				  reuseExistingChunk: true,
				},
				async: {
				  chunks: 'async',
				  priority: 1,
				  name: 'async',
				  reuseExistingChunk: true,
				},
			  },
		},
	},
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
};
module.exports = config;
