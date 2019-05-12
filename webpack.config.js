const path = require("path");
const webpack = require("webpack");

plugins = []; // if using any plugins for both dev and production
let devPlugins = []; // if using any plugins for development

let prodPlugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
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
  devtool: "source-map",
  mode: "none"
};
