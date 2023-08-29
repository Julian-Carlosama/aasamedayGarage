const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	//devtool: 'source-map',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '../public'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
				  loader: "babel-loader",
				  options: {
					presets: ["@babel/preset-env", "@babel/preset-react"]
				  }
				}
			},
			{
				test: /\.css$/,
				use: [
						"style-loader",
						{ loader: "css-loader", options: { importLoaders: 1 } },
						"postcss-loader"
					]
			  },
			  {
				/*type: "asset",
				test: /\.(png|jpe?g|gif|ico)$/i,*/
				test: /\.(png|jpe?g|gif|ico)$/i,
        		use: [
          			{
            			loader: 'file-loader',
            			options: {
              				name:'images/[name].ext',
            			}
          			},
        		],
			  }
		]
	},
	plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
		template: './src/index.html',
	})]
};
