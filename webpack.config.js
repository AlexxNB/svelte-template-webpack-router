const webpack = require('webpack');
var path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	entry: {
		bundle: ['./src/main.js']
	},
	resolve: {
		extensions: ['.js', '.html']
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		historyApiFallback: true,
		overlay: {
			warnings: true,
			errors: true
		},
		proxy: {
			'/api': {
			  target: 'https://my.site/', //will proxy to https://my.site/api
			  secure: false
			}
		  }
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				exclude: [/node_modules/],
				use: [{
					loader: 'svelte-loader',
					options: {
						skipIntroByDefault: true,
						nestedTransitions: true,
						emitCss: false,
						hotReload: true,
						preprocess: require('svelte-preprocess')({ 
							transformers: {
								scss: true,
							}
						})
					}
				}]
			},
			{
				test: /\.css$/,
				use: [
					ExtractCssChunks.loader,
					"css-loader"
				]
			},
			{
				test: /\.scss$/,
				use: [
					ExtractCssChunks.loader,
					"css-loader",
					"sass-loader"
				]
			}
		]
	},
	mode,
	plugins: [
		new HtmlWebpackPlugin({
			title: ' ',
		}),
		new ExtractCssChunks(
			{
			  filename: "[name].css",
			  chunkFilename: "[id].css",
			  hot: true, 
			  orderWarning: true, 
			  reloadAll: true,
			  cssModules: true
			}
		),
		new CopyWebpackPlugin([{ from: 'src/assets' }])
	],
	devtool: prod ? false: 'source-map'
};
