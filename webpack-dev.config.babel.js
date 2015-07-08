import webpack from "webpack";
import path from "path";

var config = {
    cache: true,
    debug: true,
    devtool: "cheap-module-source-map",
    entry: {
        bundle: [
            "webpack-dev-server/client?http://localhost:9090",
            "webpack/hot/only-dev-server",
            "./src/client.js"
        ]
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loaders: ["react-hot", "babel-loader?optional[]=runtime&stage=1"],
            test: /\.jsx?$/
        }, {
            test: /\.sass$/,
            loader: "style!css!sass?indentedSyntax"
        }, {
            test: /\.css$/,
            loader: "style!css"
        }]
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "/build/"),
        publicPath: "http://localhost:9090/build/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ["", ".js", ".jsx"]
    }
};

module.exports = config;
