let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let ImageminWebpackPlugin = require('imagemin-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let conf = {
	mode: process.env.NODE_ENV || 'development',
	entry: [
		'./src/index.js',
		'./src/css/style.scss'
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		/*publicPath: 'dist/'*/
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\. js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/, 
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								url: true
							}
						},
						'postcss-loader',
						'sass-loader'
					]
				})
				
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true
				}
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(png|jpe?g|svg)$/, 
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'img/',
							publicPath: 'img/'
						}
					}
				]
				
			},
			{
				test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/'
					}
				}]
			}
		],
	},
	plugins: [
		new ExtractTextPlugin('app.css'),
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/pug/index.pug',
		}),
		new HtmlWebpackPlugin({
			filename: 'catalog.html',
			template: 'src/pug/catalog.pug',
		}),
		new HtmlWebpackPlugin({
			filename: 'catalog-menu.html',
			template: 'src/pug/catalog-menu.pug',
		}),
		new HtmlWebpackPlugin({
			filename: 'filter.html',
			template: 'src/pug/filter.pug',
		}),
		new HtmlWebpackPlugin({
			filename: 'basket.html',
			template: 'src/pug/basket.pug',
		}),
		new webpack.ProvidePlugin({
			noUiSlider: 'nouislider'
		})
	]
};

module.exports = (env, options) => {
	
	if(options.mode === 'production'){
		conf.mode = 'production';
		conf.plugins.push(new webpack.LoaderOptionsPlugin({
			minimize: true
		}));
		conf.plugins.push(new UglifyJsPlugin({
			sourceMap: true
		}));
	}
	return conf;
}
