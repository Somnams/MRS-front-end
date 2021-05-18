import * as React from 'react';
import {withTranslation} from 'react-i18next';
import {List, Button, Menu, Dropdown} from 'antd';
import {HomeOutlined, QuestionCircleOutlined, UnorderedListOutlined, DownOutlined} from '@ant-design/icons';

import './index.scss';
import classNames from 'classnames';
import {withRouter} from 'react-router-dom';
import {inject, observer} from 'mobx-react';

@inject('rootStore')
@observer
@withTranslation()
class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.menuList = [{
            href: '/home',
            content: this.props.t('Home'),
            icon: <HomeOutlined/>
        }, {
            href: '/music',
            content: this.props.t('Music'),
            icon: <UnorderedListOutlined />
        }, {
            href: '/about',
            content: this.props.t('About'),
            icon: <QuestionCircleOutlined />
        }];
    }

    handleMenuRoute(href) {
        this.props.history.push(href);
    }

    logout() {
        console.log('click');
        window.localStorage.removeItem('mrs-storage');
        window.location.reload();
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

    renderChangeLng() {
        return (
            <Menu>
                <Menu.Item>
                    <a href="#" onClick={() => this.props.i18n.changeLanguage('zh')}>ZH</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="#" onClick={() => this.props.i18n.changeLanguage('en')}>EN</a>
                </Menu.Item>
            </Menu>
        );
    }

    render() {
        return (
            <div className={'nav'}>
                <List
                    dataSource={this.menuList}
                    renderItem={this.renderMenuList.bind(this)}
                />
                {
                    this.props.rootStore.userId !== 0 && (
                        <div className={'nav-btn'}>
                            <Button type={'link'} className={'logout-btn'} onClick={this.logout.bind(this)}>logout</Button>
                            <Dropdown overlay={this.renderChangeLng()}>
                                <a className="ant-dropdown-link">
                                    ChangeLng <DownOutlined />
                                </a>
                            </Dropdown>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default withRouter(Nav);
