import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter, useHistory } from 'react-router';

import Login from '../Login';

/**
 * Login Wrapper
 * @param {React.ComponentType} Component
 * @constructor
 */
function LoginWrapper(Component) {
    @withRouter
    @inject('rootStore')
    @observer
    class HOC extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            const { rootStore, location, history } = this.props;

            if (rootStore.userId === 0 && location.pathname !== '/') {
                if (!/login/.test(location.pathname)) {
                    history.replace('/login');
                }

                return <Login {...this.props} />;
            }
            return <Component {...this.props} />;
        }
    }

    return HOC;
}

export default LoginWrapper;
