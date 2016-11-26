'use strict';

const webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: {
        reveal: './js/reveal.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist/assets',
        publicPath: '/dist/assets'
    },
    devServer: {
        contentBase: __dirname
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015'] }
            }]
        }, {
            test: /\.(css|sass|scss)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
            minChunks: 2
        })
    ]
};
