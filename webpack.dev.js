const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const path = require("path");

module.exports = merge(common, {
    mode: "development",
    target: "web",
    devtool: "source-map",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "./assets/[name][ext]"
    },  
    //Don't verify connected clients are part of allowed hosts. Project can run on localhost:8080 from gitpod
    devServer: {
        disableHostCheck: true
      },  
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new HtmlWebpackPlugin({
            filename: "fullscreen.html",
            template: "./src/fullscreen.html"
        }),
    ],
});