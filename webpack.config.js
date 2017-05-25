var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        tree: './example/tree/simple/index.js',
        'area-tree': './example/area-tree/simple/index.js'
    },
    output: {
        path: path.resolve(__dirname, './asset'),
        publicPath: '/asset/',
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'css':'vue-style-loader!css-loader',
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader',
                options: {
                    name: 'font/[name].[text]?[hash]'
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src/js/component'), path.resolve(__dirname, 'src/js/module'), 'node_modules'],
        extensions: ['.js', '.json', '.vue', '.css', '.scss'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    devServer: {
        //port
        //host
        historyApiFallback: true,
        noInfo: true
        //proxy:{
        //  '**': 'http://localhost:3000'
        //}
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
