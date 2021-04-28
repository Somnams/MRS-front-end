import * as React from 'react';
import {Switch, Route} from "react-router";
import Home from "./containers/Home";
import About from "./containers/About";
import Music from "./containers/Music";
import NotFound from "./containers/NotFound";

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route component={Home} path={'/'} exact />
                <Route component={About} path={'/about'} />
                <Route component={Music} path={'/music'} />
                <Route component={NotFound} />
            </Switch>
        );
    };
};
