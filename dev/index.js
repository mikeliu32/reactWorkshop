import server from "../src/server";
import devServer from "./devServer";
import proxy from "./httpProxy";

let {
    PORT = 9000,
    DEV_PORT = 9090,
    HOST = 'localhost'
} = process.env,
    upstream = [
        proxy(/^\/build\/?/, `http://${HOST}:${DEV_PORT}`)
    ],
    app = server(upstream),
    dev = devServer(DEV_PORT);

app.listen(PORT, ()=>{
    console.log(`app listening on port ${PORT}`);
});

dev.listen(DEV_PORT, HOST, (err)=>{
    if (err){
        console.error(err);
        throw err;
    }
    console.log(`webpack dev server listening on port ${DEV_PORT}`);
});
