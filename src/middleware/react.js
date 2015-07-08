import reactRouter from "react-router";
import React from "react";
import alt from "../alt";
import router from "../component/router";
import {fetch, config} from "../util/asyncFetchData";

export default function(){
    return function*(next){
        let innerHTML, snapshot, ingredient, asyncRoute, redirectPath, routerContext;

        try {
            var {Root, state, redirectOpt} = yield (done)=>{
                routerContext = reactRouter.create({
                    routes: router,
                    location: this.path,
                    onAbort: (redirectOpt)=>{
                        done(null, {redirectOpt});
                    }
                });

                routerContext.run((Root, state)=>{
                    done(null, {Root, state});
                });
            };
        } catch (e){
            throw e;
        }

        if (redirectOpt){
            let {to, params, query} = redirectOpt;
            redirectPath = routerContext.makePath(to, params, query);
            if (this.path === redirectPath){
                this.throw(400, "infinite redirect loop");
            } else {
                return this.redirect(redirectPath);
            }
        }

        let {path, action, pathname, params, query, routes} = state;

        if (routes.length > 0){
            let {promise, asyncRoute} = fetch({routes, params, query});
            ingredient = yield promise;
            config(ingredient, asyncRoute);

            innerHTML = React.renderToString(<Root />);
            snapshot = alt.flush();
            this.react = {innerHTML, snapshot};
        }
        yield next;
    };
};
