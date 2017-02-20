var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry :'./src/main.js',
	output : {
		path : path.resolve(__dirname,'./dist'),
		publicPath : '/dist/',
		filename : 'bundle.js'
	},
	module :{
		rules :[
			{
				test : /\.vue$/,
				loader : 'vue-loader',
			},
			 {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test : /\.js$/,
                loader : 'babel-loader',
                exclude : /node_modules/
            },
            {
                test : /\.(png|jpg|gif|svg)/,
                loader : 'file-loader',
                options : {
                    name : '[name].[ext]?[hash]'
                }
            }
		]
	},

//eval-source-map	每个module会通过eval()来执行，并且生成一个DataUrl形式的SourceMap.
//cheap-module-source-map	生成一个没有列信息（column-mappings）的SourceMaps文件，同时 loader 的 sourcemap 也被简化为只包含对应行的。
}

if(process.env.NODE_ENV === 'production'){
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env' : {
                NODE_ENV : '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap :true,
            compress : {
                warnings : false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize : true
        })
    ])
}