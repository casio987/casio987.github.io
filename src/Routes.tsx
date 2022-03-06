import React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import LandingPage from "./pages/LandingPage/LandingPage";

const Routes = () => (
    <Switch>
        <Route exact path ="/">
            <LandingPage />
        </Route>
        <Route exact path ="/*">
            <ErrorPage/>
        </Route>
    </Switch>
);

export default Routes;