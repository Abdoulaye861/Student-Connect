var path = require('path');
var webpack = require('webpack');


module.exports = {
 entry: './src/setting.js',
 output: {path:__dirname, filename: 'bundle.js'},
 watch:true,

  module: {
    loaders: [
      {
         test: /.jsx?$/,
         loader: 'babel-loader',
         exclude: /node_modules/,
         query: {
           presets: ['es2015', 'react']
       }
      },
   
      {
          test: /\.css$/,
          loader:'style-loader!css-loader'
        },
         { 
        test: /\.png$/, 
        loader: "url-loader?limit=100000&minetype=image/png" 
      },
       { 
        test: /\.jpg$/, 
        loader: "file-loader" 
      }
    ]
    
  }
};