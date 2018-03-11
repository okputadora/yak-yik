var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: "bundle.js"
  },
	module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}
