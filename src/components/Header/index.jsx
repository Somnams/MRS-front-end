import * as React from 'react';
import {Layout, Button} from 'antd';
import {LogoutOutlined} from '@ant-design/icons';
import './index.scss';

export default class Header extends React.Component {
    render() {
        return (
            <Layout.Header className={'header'}>
                <Button type={'primary'} ghost icon={<LogoutOutlined />}/>
            </Layout.Header>
        );
    };
};
