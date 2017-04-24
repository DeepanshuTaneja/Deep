var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './js/app.js',
     output: {
         path :'/build',
         filename: 'app.bundle.js',
         publicPath: "build"
     },
     node:{
         },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader:'react-hot-loader',
                 exclude: /node_modules/,

             },
             {
                 test: /\.js$/,
                 loader:'babel-loader',
                 query: {
                     presets: ['es2015', 'react']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };

