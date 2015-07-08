import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import webpackDevConfig from "../webpack-dev.config.babel.js";

export default function(port){
    let compiler = webpack(webpackDevConfig),
        config = {
            contentBase: `http://localhost:${port}`,
            hot: true,
            quiet: false,
            noInfo: true,
            
            publicPath: webpackDevConfig.output.publicPath,
            stats: {
                assets: false,
                colors: true,
                version: false,
                hash: false,
                timings: false,
                chunks: false,
                chunkModules: false
            }
        },
        server = new WebpackDevServer(compiler, config);

    server.listen(port, "localhost", function(err) {
        if (err){
            console.error(err);
        }
    });
};
