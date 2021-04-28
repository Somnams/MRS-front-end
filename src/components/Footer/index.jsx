import * as React from 'react';
import {Layout, Typography} from 'antd';
import './index.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <Layout.Footer className={'footer'}>
                <Typography.Text type={'secondary'} className={'footer-content'}>
                    &copy; Somnambulist 2021-4-24
                </Typography.Text>
            </Layout.Footer>
        );
    };
};
