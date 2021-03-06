const webpack = require('webpack');
var path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');


const Config = require('./template.config.js');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

 

module.exports = {
	entry: {
		bundle: ['./src/main.js']
	},
	watch: !prod,
	resolve: {
		extensions: ['.js', '.html']
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	devServer: {
		compress: true,
		inline:true,
		hot:true,
		historyApiFallback: Config.is_history(),
		overlay: {
			warnings: true,
			errors: true
		},
		proxy: Config.proxy_param()
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
						emitCss: true,
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
			},
			{
				test: /icons\/.+\.svg$/,
				use: [{loader: 'svg-sprite-loader',
					options: {
					  extract: true,
					  spriteFilename: 'icons/sprite-[hash:8].svg'
					}
				},'svgo-loader']
			}
		]
	},
	mode,
	plugins: [
		new HtmlWebpackPlugin({
			title: Config.title,
			hash: true
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
		new CopyWebpackPlugin([{ from: 'src/assets'}]),
		new SpriteLoaderPlugin({
			plainSprite: true
		} )
	],
	devtool: prod ? false: 'source-map'
};
