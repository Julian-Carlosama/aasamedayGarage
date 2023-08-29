const { merge } = require("webpack-merge");
const base = require("./webpack.base");

/** @type {import('webpack').Configuration} */
const devpConfig = {
    mode: "development",
    devServer: {
        historyApiFallback: true,
        port: 3000,
    },
    devtool: "eval-source-map"
}

module.exports = merge(base, devpConfig);
