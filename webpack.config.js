const webpack = require('webpack');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

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
		path: __dirname + '/public',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	devServer: {
		historyApiFallback: true,
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
				exclude: /node_modules/,
				use: {
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
				}
			},
			{
				test: /\.css$/,
				use: [
					ExtractCssChunks.loader,
					"css-loader"
				]
	}
		]
	},
	mode,
	plugins: [
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
	],
	devtool: prod ? false: 'source-map'
};
