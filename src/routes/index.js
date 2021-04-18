import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "../containers/home/index";
import About from "../containers/about";

class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path={'/about'} component={About}/>
                </Switch>
            </div>
        );
    }
}

export default Router;
