const { merge } = require("webpack-merge");
const base = require("./webpack.base");

/** @type {import('webpack').Configuration} */
const proConfig = {
    mode: "production",
    devtool: "source-map"
}

module.exports = merge(base, proConfig);
