var path = require('path');
var webpack = require('webpack');

module.exports = {
  // TODO: For Production
  // devtool: '#eval-source-map',
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'client', 'app.js'),
  ],
  output: {
    path:  path.join(__dirname, '/dist/'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: path.join(__dirname, 'client'),
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }, {
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: path.join(__dirname, 'universal'),
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }, {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: __dirname
    }]
  }
};
