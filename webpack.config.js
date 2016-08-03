var path = require('path')
var webpack = require('webpack');
var env = require('yargs').argv.mode;
var plugins = [];
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

if(env === 'build') {
  plugins.push(new UglifyJsPlugin( { minimize: true}) );
}

module.exports = {
  entry: ['./src/js/simple_slider'],
  devtool: 'source-map',
  output: {
    library: 'Slider',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, "lib", "js"),
    filename: env === 'build' ? 'Slider.min.js' : 'Slider.js',
    umdNamedDefine: true
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        exclude: /node_modules/,
      }
    ],

    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['babel-plugin-add-module-exports']
        }
      }
    ]
  },

  plugins: plugins,

  stats: {
    colors: true
  },
};
