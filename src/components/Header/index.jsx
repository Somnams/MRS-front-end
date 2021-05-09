import * as React from 'react';
import {Layout, Button} from 'antd';
import {LogoutOutlined} from '@ant-design/icons';
import {withRouter} from 'react-router-dom';
import './index.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: false
        };
    }

    logout() {
        window.localStorage.removeItem('mrs-storage');
        this.props.history.push('/login');
    }


    render() {
        return (
            <Layout.Header className={'header'}>
                <Button
                    type={'primary'} ghost
                    icon={<LogoutOutlined />}
                    onClick={this.logout.bind(this)}
                />
            </Layout.Header>
        );
    };
};


export default withRouter(Header);
