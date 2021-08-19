const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/webui-assets"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "url-loader"          
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      filename: "index.html", //target html
      template: "./src/index.html", //source html
    }),
    new MiniCssExtractPlugin({ filename: "css/style.css" }),
  ],
};
