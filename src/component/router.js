import React from "react";
import {Route, DefaultRoute} from "react-router";

import app from "./app";
import quotaModifier from "./quotaModifier";

export default (
    <Route path="/" handler={app} >
        <Route path="restaurant">
            <Route path=":restaurantId" >
                <Route path="reservation">
                    <DefaultRoute />
                    <Route path="create" >
                        <Route path="step1" />
                        <Route path="success" />
                    </Route>
                    <Route path=":reservation_id" />
                </Route>
                <Route path="quota">
                    <DefaultRoute />
                    <Route path="modify" />
                </Route>
                <Route path="close">
                    <DefaultRoute />
                    <Route path="success" />
                </Route>
                <Route path="quota">
                    <DefaultRoute />
                    <Route path="modify/:quotaId" handler={quotaModifier} />
                </Route>
            </Route>
        </Route>
    </Route>
);
