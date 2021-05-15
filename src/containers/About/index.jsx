import * as React from 'react';
import {Avatar} from 'antd';
import './index.scss';

function About() {
    return (
        <div className={'page about'}>
            <div className={'about-view'}>
                <Avatar size={'large'} shape="square" className={'about-view-ava'}
                    src={'http://p4.music.126.net/Gp-zldmGPcJLj8kw1QnGAw==/109951165691131416.jpg?param=140y140'}
                />
                <div className={'about-view-desc'}>
                    UserName: Feng,na
                    <br/>
                    Tel: 155 **** 2606
                    <br/>
                    QQ: 3244 *** 132
                    <br/>
                    GitHub: <a href="https://github.com/Somnams">Somnams</a>
                    <br/>
                    description: If you have any problems with it, please contact me.
                    <br/>
                </div>
            </div>
        </div>
    );
}

export default About;
