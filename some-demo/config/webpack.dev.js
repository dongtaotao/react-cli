const path = require("path");
const webpack = require("webpack");

const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");


const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const smp = new SpeedMeasurePlugin();

const res = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../build"),
    publicPath: "/",
    // https://webpack.docschina.org/guides/build-performance/#output-without-path-info
    pathinfo: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", {
          loader: "css-loader",
        },
        ],
        include: path.resolve(__dirname, "../src"),
        exclude: [
          path.resolve(__dirname, '../node_modules/antd'),
          path.resolve(__dirname, '../src/global.less'),
          // path.resolve(__dirname, '../src/layout/UserLayout.less'),
        ],

      },
      {
        test: /\.less$/i,
        use: ["style-loader", {
          loader: "css-loader",
          options: {
            modules: true,
          },
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
        include: path.resolve(__dirname, "../src"),
        exclude: [
          path.resolve(__dirname, '../node_modules/antd'),
          path.resolve(__dirname, '../src/global.less'),
          // path.resolve(__dirname, '../src/layout/UserLayout.less'),
        ],

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
        include: [
          path.resolve(__dirname, '../node_modules/antd'),
          path.resolve(__dirname, '../src/global.less'),
          // path.resolve(__dirname, '../src/layout/UserLayout.less'),
        ],
      },

    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: "eval-cheap-module-source-map",
  devServer: {
    contentBase: path.join(__dirname, "../build"),
    historyApiFallback: true,
    port: 4000,
    hot: true,
    proxy: {
      '/netease-music': {
        target: 'https://netease-cloud-music-api-ten-iota.vercel.app',
        changeOrigin: true,
        pathRewrite: { '^/netease-music': '' },
      }
    }

  },
  // optimization: {
  //   runtimeChunk: true,
  //   removeAvailableModules: false,
  //   removeEmptyChunks: false,
  //   splitChunks: false,
  // },
});

module.exports = smp.wrap(res);
