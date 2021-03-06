let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let ImageminWebpackPlugin = require('imagemin-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');


let ExtractStyle = ExtractTextPlugin;


let conf = {
	mode: process.env.NODE_ENV || 'development',
	entry: [
		'./src/index.js',
		'./src/css/style.scss'
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/main.js',
		// filename: '../../fancy-mama.loc/public_html/common/htdocs/mobile/js/main.js',
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\. js$/,
				loader: 'babel-loader'
			},
            {
                test: /\.css$/,
                use: ExtractStyle.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                url: true
                            }
                        },
                        'postcss-loader'
                    ]
                })

            },
			{
				test: /\.scss$/, 
				use: ExtractStyle.extract({
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
				use: [{
					loader: 'file-loader',
					options: { 
						name: '[name].[ext]',
						outputPath: 'img/',
						// outputPath: '../../fancy-mama.loc/public_html/common/htdocs/mobile/img/',
						publicPath: 'img/'
					}
				}]
			},


			{
				test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'file-loader',
					options: { 
						name: '[name].[ext]',
						outputPath: 'fonts/',
						// outputPath: '../../fancy-mama.loc/public_html/common/htdocs/mobile/fonts/',
						publicPath: 'fonts/'
					}
				}]
			}
		],
	},
	plugins: [
		// RELIZE
		new CleanWebpackPlugin([
			'dist',
			// '../../fancy-mama.loc/public_html/common/htdocs/mobile/css',
			// '../../fancy-mama.loc/public_html/common/htdocs/mobile/fonts',
			// '../../fancy-mama.loc/public_html/common/htdocs/mobile/images',
		]),
		// new ExtractStyle('../../fancy-mama.loc/public_html/common/htdocs/mobile/style.css'),
		// THE END


		new ExtractStyle('app.css'),
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
		new HtmlWebpackPlugin({
			filename: 'product-card.html',
			template: 'src/pug/product-card.pug',
		}),
		new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
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
