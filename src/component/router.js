import React from "react";
import app from "./app";
import {Route, DefaultRoute} from "react-router";

export default (
    <Route path="/" handler={app} >
        <Route path="restaurant">
            <Route path=":restaurant_id" >
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
                    <Route path="step1" />
                    <Route path="step2" />
                </Route>
            </Route>
        </Route>
    </Route>
);
