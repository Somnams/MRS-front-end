import * as React from 'react';
import {Avatar} from 'antd';
import {useTranslation} from 'react-i18next';
import './index.scss';

function About() {
    const {t} = useTranslation();
    return (
        <div className={'page about'}>
            <div className={'about-view description-text'}>
                <Avatar size={'large'} shape="square" className={'about-view-ava'}
                    src={'http://p4.music.126.net/Gp-zldmGPcJLj8kw1QnGAw==/109951165691131416.jpg?param=140y140'}
                />
                <div className={'about-view-desc'}>
                    {t('Username')}: Feng,na
                    <br/>
                    {t('Tel')}: 155 **** 2606
                    <br/>
                    QQ: 3244 *** 132
                    <br/>
                    GitHub: <a href="https://github.com/Somnams">Somnams</a>
                    <br/>
                    {t('If you have any problems with it, please contact me.')}
                    <br/>
                </div>
            </div>
        </div>
    );
}

export default About;
