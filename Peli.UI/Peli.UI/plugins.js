const path = require("path");
const _CleanWebpackPlugin = require("clean-webpack-plugin");
const _CopyWebpackPlugin = require("copy-webpack-plugin");
const _ExtractTextPlugin = require("extract-text-webpack-plugin");
const _ManifestPlugin = require("webpack-manifest-plugin");
const _StyleLintPlugin = require("stylelint-webpack-plugin");
const webpack = require("webpack");

// Plugin joka pyyhkii build kansion and ennen uutta buildia
let pathsToClean = ["build"];
const CleanWebpackPlugin = new _CleanWebpackPlugin(pathsToClean);

//Plugin joka ottaa määritellyt tuotanto dependencyt erilliseen tiedostoon
const CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: "vendor",
  filename: "vendor.bundle.js"
});

//Plugin joka kopioi index.html tiedoston ja kuvat build kansioon
const CopyWebpackPlugin = new _CopyWebpackPlugin([
  {
    from: path.resolve(__dirname, "public/index.html"),
    to: path.resolve(__dirname, "build")
  },
  {
    from: path.resolve(__dirname, "assets", "**", "*"),
    to: path.resolve(__dirname, "build")
  }
]);
// Phaseria varten lisämäärittelyä
const DefinePlugin = new webpack.DefinePlugin({
  "typeof CANVAS_RENDERER": JSON.stringify(true),
  "typeof WEBGL_RENDERER": JSON.stringify(true)
});
// Tämä plugari extraktoi CSS asiat
const ExtractTextPlugin = new _ExtractTextPlugin("styles/css/app.css");

// Tämä luo manifestin
const ManifestPlugin = new _ManifestPlugin();

const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, "stylelint.config.js"),
  context: path.resolve(__dirname, "src/css"),
  files: "**/*.css",
  failOnError: false,
  quiet: false
});

module.exports = {
  CleanWebpackPlugin: CleanWebpackPlugin,
  CommonsChunkPlugin: CommonsChunkPlugin,
  CopyWebpackPlugin: CopyWebpackPlugin,
  DefinePlugin: DefinePlugin,
  ExtractTextPlugin: ExtractTextPlugin,
  ManifestPlugin: ManifestPlugin,
  StyleLintPlugin: StyleLintPlugin
};
