import server from "../src/server";

let {PORT = 9000} = process.env,
    app = server();

app.listen(PORT, ()=>{
    console.log(`app listening on port ${PORT}`);
});
