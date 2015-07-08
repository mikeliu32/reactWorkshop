import server from "./server";
import devServer from "../dev/devServer";
import proxy from "./middleware/httpProxy";

let {
    PORT = 9000,
    DEV_PORT = 9090
} = process.env,
    upstream = [
        proxy(/^\/build/, `http://localhost:${DEV_PORT}`)
    ],
    app = server(upstream);

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
    devServer(DEV_PORT);
});
