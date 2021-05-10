import * as React from 'react';
import {List, Typography} from 'antd';
import {HomeOutlined, QuestionCircleOutlined, UnorderedListOutlined} from '@ant-design/icons';
import './index.scss';
import classNames from "classnames";
import {withRouter} from 'react-router-dom';

class Nav extends React.Component {
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
                className={classNames('nav-li', {
                    'nav-li-active': item.href === pathname
                })}
                onClick={this.handleMenuRoute.bind(this, item.href)}
            >
                <a className={'nav-li-a'}>
                    {item.icon} {item.content}
                </a>
            </List.Item>
        );
    }

    render() {
        return (
            <List
                dataSource={this.menuList}
                renderItem={this.renderMenuList.bind(this)}
                className={'nav'}
            />
        );
    }
};

export default withRouter(Nav);
