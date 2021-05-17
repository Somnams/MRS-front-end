import * as React from 'react';
import {Switch, Route} from 'react-router';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Home from './containers/Home';
import About from './containers/About';
import Music from './containers/Music';
import NotFound from './containers/NotFound';
import Root from './containers/Root';
import Welcome from './containers/Welcome';

import LoginWrapper from './components/LoginWrapper';

@LoginWrapper
class Router extends React.Component {
    render() {
        return (
            <TransitionGroup className={'router'}>
                <CSSTransition
                    timeout={5000}
                    className={'fade'}
                >
                    <Switch>
                        <Route component={Root} path={'/'} exact />
                        <Route component={Home} path={'/home'} />
                        <Route component={About} path={'/about'} />
                        <Route component={Music} path={'/music'} />
                        <Route component={Welcome} path={'/welcome'} />
                        <Route component={NotFound} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        );
    };
}

export default Router;
