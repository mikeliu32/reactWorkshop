import "babel/polyfill";

import path from "path";
import koa from "koa";
import statics from "koa-static";
import middleware from "./middleware";

export default function server (upstream = [], downstream = []){
    let app = koa();

    app.use(function*(next){
        try {
            yield next;
        } catch (e) {
            console.error(e.stack);
        }
    });

    upstream.forEach((mw)=>{
        app.use(mw);
    });

    app.use(statics(path.join(__dirname, "../asset/")));
    app.use(middleware.react());
    app.use(middleware.html());

    downstream.forEach((mw)=>{
        app.use(mw);
    });

    return app;
}
