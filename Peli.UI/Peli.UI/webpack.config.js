const path = require("path");
const loaders = require("./loaders");
const plugins = require("./plugins");
module.exports = {
  entry: {
    app: "./src/app.js",
    vendor: ["phaser"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js"
  },

  module: {
    loaders: [
      loaders.JSLoader,
      loaders.ESLintLoader,
      loaders.CSSLoader,
      loaders.FileLoader,
      loaders.FontsLoader,
      loaders.AudioLoader
    ]
  },
  // Pretty terminal output
  stats: { colors: true },

  // Generate external sourcemaps for the JS & CSS bundles
  devtool: "source-map",

  devServer: {
    port: process.env.PORT || 3000,
    contentBase: path.resolve(__dirname, "build"),
    historyApiFallback: true
  },

  plugins: [
    plugins.CleanWebpackPlugin,
    plugins.CommonsChunkPlugin,
    plugins.CopyWebpackPlugin,
    plugins.DefinePlugin,
    plugins.ExtractTextPlugin,
    plugins.ManifestPlugin,
    plugins.StyleLintPlugin
  ]
};
