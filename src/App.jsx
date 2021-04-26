<<<<<<< HEAD
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
=======
import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Layout} from "antd";
import './App.scss';

import Router from './routes';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <HashRouter>
                <Layout className={'platform'}>
                    <Header/>
                    <Layout.Content>
                        <Router/>
                    </Layout.Content>
                    <Footer/>
                </Layout>
            </HashRouter>
>>>>>>> 4143e889332af04ed5e13be855b41b609f4536ad
        );
    }
}
