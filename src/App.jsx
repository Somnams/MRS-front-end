import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import {I18nextProvider} from 'react-i18next';
import { Provider } from 'mobx-react';
import Nav from "./components/Navbar";
import RootStore from './store/rootStore';

import './App.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <I18nextProvider>
                <Provider rootStore={RootStore}>
                    <BrowserRouter>
                        <main>
                            <Nav/>
                            <Router />
                        </main>
                    </BrowserRouter>
                </Provider>
            </I18nextProvider>
        );
    }
}
