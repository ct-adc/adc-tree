var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin('[name]/[name].css');
module.exports = {
    entry: {
        'tree': './src/js/tree/tree.vue',
        'areaTree': './src/js/areaTree/areaTree.vue'
    },
    output: {
        path: path.resolve(__dirname, './lib'),
        filename: '[name]/[name].js',
        libraryTarget: 'commonjs-module'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'css':extractCSS.extract(['css-loader']),
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
                test: /\.css$/,
                loader: extractCSS.extract(['css-loader'])
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
    externals:[
        function(context, request, callback) {
            if (/^vue$/.test(request)){
                return callback(null, 'commonjs ' + request);
            }
            callback();
        }
    ],
    plugins: [extractCSS]
};

