const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "",
    path: path.resolve(__dirname, "../build"),
    // 打包前清空输出目录
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, {
          loader: "css-loader",
          options: {
            modules: true,
          },
        },],
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, {
          loader: "css-loader",
          options: {
            modules: true,
            importLoaders: 1,
          },
        },
        {
          loader: "less-loader",
        },
        ],
        exclude: path.resolve(__dirname, "../src/app.less"),
      },
      {
        test: /\.less$/i,
        use: ["style-loader", {
          loader: "css-loader",
        },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true
              },
            },
          },
        ],
        include: path.resolve(__dirname, "../src/app.less"),
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, {
          loader: "css-loader",
          options: {
            modules: true,
            importLoaders: 1,
          },
        },
        {
          loader: "sass-loader",
        },
        ],
      },
    ],
  },
  plugins: [

    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
});
