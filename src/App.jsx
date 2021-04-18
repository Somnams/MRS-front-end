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
        );
    }
}
