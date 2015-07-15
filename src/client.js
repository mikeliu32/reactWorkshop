import "babel/polyfill";

import React from "react";
import Iso from "iso";
import reactRouter from "react-router";
import router from "./component/router";
import alt from "./alt";
import {fetch, config} from "./util/asyncFetchData";

Iso.bootstrap(function (state, meta, node){
    alt.bootstrap(state);
    reactRouter.run(
        router,
        reactRouter.HistoryLocation,
        (Root, {params, query, routes})=>{
            React.render(<Root />, node);

            let {promise, asyncRoute} = fetch({query, params, routes});
            promise.then((ingredient)=>{
                config(ingredient, asyncRoute);
            });
        }
    );
});
