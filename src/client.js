import "babel/polyfill";

import React from "react";
import Iso from "iso";
import reactRouter from "react-router";
import router from "./router";
import alt from "./alt";
import {fetch, config} from "./util/asyncFetchData";
import configStore from "./store/configStore";

const {
    nodeEnv
} = configStore.getState();

Iso.bootstrap(function (state, meta, node){
    alt.bootstrap(state);

    if (nodeEnv != 'production') {
        alt.dispatcher.register(console.log.bind(console));
    }

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
