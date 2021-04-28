import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import {I18nextProvider} from 'react-i18next';

import {Layout} from 'antd';
import Header from './components/Header';
import Sider from './components/Sider';
import Footer from './components/Footer';

import './App.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <I18nextProvider>
                <BrowserRouter>
                    <Layout className={'content'}>
                        <Sider/>
                        <Layout>
                            <Header/>
                            <Layout.Content>
                                <Router/>
                            </Layout.Content>
                            <Footer/>
                        </Layout>
                    </Layout>
                </BrowserRouter>
            </I18nextProvider>
        );
    }
}
