const path = require("path");
const webpack = require("webpack");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

plugins = []; // if using any plugins for both dev and production
let devPlugins = []; // if using any plugins for development

let prodPlugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  })
];

plugins = plugins.concat(
  process.env.NODE_ENV === "production" ? prodPlugins : devPlugins
);

module.exports = {
  context: __dirname,
  entry: "./frontend/pexcel.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-react"]
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new HardSourceWebpackPlugin({
        // Either an absolute path or relative to webpack's options.context.
        cacheDirectory: "node_modules/.cache/hard-source/[confighash]",
        // Either a string of object hash function given a webpack config.
        configHash: function(webpackConfig) {
          // node-object-hash on npm can be used to build this.
          return require("node-object-hash")({ sort: false }).hash(
            webpackConfig
          );
        },
        // Either false, a string, an object, or a project hashing function.
        environmentHash: {
          root: process.cwd(),
          directories: [],
          files: ["package-lock.json", "yarn.lock"]
        },
        // An object.
        info: {
          // 'none' or 'test'.
          mode: "none",
          // 'debug', 'log', 'info', 'warn', or 'error'.
          level: "debug"
        },
        // Clean up large, old caches automatically.
        cachePrune: {
          // Caches younger than `maxAge` are not considered for deletion. They must
          // be at least this (default: 2 days) old in milliseconds.
          maxAge: 2 * 24 * 60 * 60 * 1000,
          // All caches together must be larger than `sizeThreshold` before any
          // caches will be deleted. Together they must be at least this
          // (default: 50 MB) big in bytes.
          sizeThreshold: 50 * 1024 * 1024
        }
      })
    ]
  },
  devtool: "source-map",
  mode: "none"
};
