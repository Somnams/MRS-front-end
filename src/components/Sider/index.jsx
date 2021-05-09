import * as React from 'react';
import {WithTranslation} from 'react-i18next';

import {Layout, Avatar, Typography, List} from 'antd';
import {HomeOutlined, QuestionCircleOutlined, UnorderedListOutlined} from '@ant-design/icons';
import Logo from '../../common/images/logo.jpg';
import classNames from 'classnames';
import {withRouter} from 'react-router';

import {observer, inject} from 'mobx-react';

import './index.scss';
import rootStore from "../../store/rootStore";

@inject('rootStore')
@observer
class Sider extends React.Component {
    constructor(props) {
        super(props);

        this.menuList = [{
            href: '/',
            content: 'Home',
            icon: <HomeOutlined/>
        }, {
            href: '/music',
            content: 'Music',
            icon: <UnorderedListOutlined />
        }, {
            href: '/about',
            content: 'About',
            icon: <QuestionCircleOutlined />
        }];
    }

    handleMenuRoute(href) {
        this.props.history.push(href);
    }

    renderMenuList(item) {
        const {pathname} = this.props.location;
        return (
            <List.Item
                className={classNames('sider-list', {
                    'sider-list-active': item.href === pathname
                })}
                onClick={this.handleMenuRoute.bind(this, item.href)}
            >
                <Typography.Text>
                    {item.icon} {item.content}
                </Typography.Text>
            </List.Item>
        );
    }

    render() {
        const username = this.props.rootStore.username;

        return (
            <Layout.Sider className={'sider'}>
                <div className={'sider-user'}>
                    <Avatar src={Logo} size={'large'} className={'sider-user-avatar'} />
                    <Typography.Title
                        level={5}
                        className={'sider-user-name'}
                   >
                        {username}
                    </Typography.Title>
                    <Typography.Paragraph
                        className={'sider-user-description'}
                        ellipsis={{
                            rows: 1,
                            tooltip: 'WQH QWQ TAT TvT QvQ'
                        }}
                    >
                        .............................................
                    </Typography.Paragraph>
                </div>
                <List
                    dataSource={this.menuList}
                    renderItem={this.renderMenuList.bind(this)}
                />
            </Layout.Sider>
        );
    }
}


export default withRouter(Sider);
