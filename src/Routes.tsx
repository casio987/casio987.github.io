import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const Routes = () => (
    <Switch>
        <Route exact path ="/">
            <HomePage/>
        </Route>
        <Route exact path ="/about">
            <AboutPage/>
        </Route>
        <Route exact path ="/projects">
            <ProjectsPage/>
        </Route>
        <Route exact path ="/*">
            <ErrorPage/>
        </Route>
    </Switch>
);

export default Routes;