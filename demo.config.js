var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        'tree': './src/js/tree/tree.vue',
        'area-tree': './src/js/area-tree/area-tree.vue'
    },
    output: {
        path: path.resolve(__dirname, './lib'),
        filename: '[name].demo.js',
        library: 'ct-adc-[name]',
        libraryTarget: 'umd'
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
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src/js/component'), path.resolve(__dirname, 'src/js/module'), 'node_modules'],
        extensions: ['.js', '.json', '.vue', '.css', '.scss'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
    //externals: {
        //function(context, request, callback) {
        //    if (/^vue$/.test(request)){
        //        return callback(null, 'commonjs ' + request);
        //    }
        //    callback();
        //},
        //function(context, request, callback) {
        //    if (/^ct-utility$/.test(request)){
        //        return callback(null, 'commonjs ' + request);
        //    }
        //    callback();
        //}
        //'ct-utility': 'utility',
        //'vue':'Vue'

    //}
};

