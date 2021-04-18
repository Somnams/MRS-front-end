import React, {Component} from 'react';
import {Typography, Layout} from 'antd';
import './index.scss';


export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const nowYear = new Date().getFullYear();
        return (
            <Layout.Footer className={'footer'}>
                <Typography.Paragraph
                    className={'footer-content'}
                    type={'secondary'}
                >
                    Copyright &copy; Somnambulist 2021-{nowYear}
                </Typography.Paragraph>
            </Layout.Footer>
        );
    }
}
