import React, {Component} from 'react';
import {Typography, Layout} from 'antd';
import {withRouter} from 'react-router';
import LoginForm from "../Login";
import './index.scss';

class Header extends Component {
    constructor(props) {
        super(props);

        this.anchorList = [{
            text: 'Home',
            href: '/'
        }, {
            text: 'About',
            href: '/about'
        }, {
            text: 'Login',
            href: '#'
        }];
    }

    handleOnAnchorClick = (href, event) => {
        event.preventDefault();
        this.props.history.push(href);
    }

    render() {
        const {pathname} = this.props.location;
        return (
          <Layout.Header className={'header'}>
              <Typography.Title level={2} className={'header-title'}>Music</Typography.Title>
              <div className={'header-content'}>
                  {this.anchorList.map(item => (
                      <a
                          href={item.href}
                          key={item.href}
                          onClick={this.handleOnAnchorClick.bind(this, item.href)}
                          className={item.href === pathname ? 'header-content-active' : ''}
                      >
                          {item.text}
                      </a>
                  ))}
              </div>
          </Layout.Header>
        );
    }
}

export default withRouter(Header);
