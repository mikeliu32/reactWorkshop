import React from "react";
import {Route, DefaultRoute} from "react-router";

import app from "./handler/app";
import restaurant from "./handler/restaurant";
import reservation from "./handler/reservation";
import reservationCreate from "./handler/reservationCreate";
import reservationInfo from "./handler/reservationInfo";
import quotaModifier from "./handler/quotaModifier";

export default (
    <Route path="/" handler={app}>
        <Route path="restaurant">
            <Route path=":restaurantId" handler={restaurant}>
                <Route path="reservation">
                    <DefaultRoute name="list" handler={reservation}/>
                    <Route name="add" path="create" handler={reservationCreate}>
                        <Route path="step1" />
                        <Route path="success" />
                    </Route>
                    <Route name="info" path=":reservationId" handler={reservationInfo}/>
                </Route>
                <Route path="quota">
                    <DefaultRoute />
                    <Route name="quotaModify" path="modify" />
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
