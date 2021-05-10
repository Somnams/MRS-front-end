import * as React from 'react';
import {Switch, Route} from "react-router";
import Home from "./containers/Home";
import About from "./containers/About";
import Music from "./containers/Music";
import Login from "./components/Login";
import NotFound from "./containers/NotFound";
import Root from "./containers/Root";

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route component={Root} path={'/'} exact />
                <Route component={About} path={'/about'} />
                <Route component={Music} path={'/music'} />
                <Route component={Login} path={'/login'} />
                <Route component={NotFound} />
            </Switch>
        );
    };
};
