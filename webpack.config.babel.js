import webpack from "webpack";

let config = {
    cache: true,
    debug: false,
    entry: [
        "./src/client.js"
    ],
    module: {
        loaders: [{
            exclude: /node_modules/,
            loaders: ["babel-loader?optional[]=runtime&stage=0"],
            test: /\.jsx?$/
        }]
    },
    output: {
        path: "build/",
        filename: "bundle.js"
    },
    plugins: [
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.OccurenceOrderPlugin(),
          new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false
            }
          })
    ],
    resolve: {
        extensions: ["", ".js", ".jsx"]
    }
};

export default config;
