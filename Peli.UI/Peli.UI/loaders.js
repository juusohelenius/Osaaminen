const plugins = require("./plugins");
const path = require("path");

// JS tiedostojen loaderi
const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["env"]
    }
  }
};

const ESLintLoader = {
  test: /\.js$/,
  enforce: "pre",
  exclude: /node_modules/,
  use: {
    loader: "eslint-loader",
    options: {
      configFile: __dirname + "/.eslintrc"
    }
  }
};
//CSS tiedostoja varten loaderi
const CSSLoader = {
  test: /\.css$/,
  include: [path.resolve(__dirname, "src", "styles", "css")],
  use: plugins.ExtractTextPlugin.extract({
    use: [
      {
        loader: "css-loader",
        options: {
          importLoaders: 1
        }
      },
      {
        loader: "postcss-loader",
        options: {
          config: {
            path: __dirname + "/postcss.config.js"
          }
        }
      }
    ]
  })
};
//Kuvia varten loaderi
const FileLoader = {
  test: /\.(jpg|png|gif|svg)$/,
  use: [
    {
      loader: "file-loader",
      options: { name: "[name].[ext]", outputPath: "assets/images" }
    }
  ]
};

//Ääniä varten oma loaderi
const AudioLoader = {
  test: /\.wav/,
  use: [
    {
      loader: "file-loader",
      options: { name: "[name].[ext]", outputPath: "assets/audio" }
    }
  ]
};

//Fontteja varten oma loaderi
const FontsLoader = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: ["file-loader"]
};

module.exports = {
  JSLoader: JSLoader,
  ESLintLoader: ESLintLoader,
  CSSLoader: CSSLoader,
  FileLoader: FileLoader,
  FontsLoader: FontsLoader,
  AudioLoader: AudioLoader
};
