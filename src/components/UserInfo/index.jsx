import * as React from 'react';
import {Avatar, Typography, Tag} from 'antd';
import {SettingOutlined} from '@ant-design/icons';
import './index.scss';

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'user'}>
                <div className={'user-list'}>
                    <Avatar
                        shape="square"
                        size="large"
                        className={'user-list-avatar'}

                        src={'http://p2.music.126.net/ld6i9FVwFsTsaTVMC0PDIg==/109951165973667275.jpg?param=140y140'}
                 />
                    <div className={'user-list-desc'}>
                        <div className={'user-list-desc-username'}>
                            Alice
                            <Tag className={'test-tag'} color="magenta">2000</Tag>
                            <Tag color="volcano">women</Tag>
                            <Tag color="gold">rapper</Tag>
                            {/*<Tag color="green">builder</Tag>*/}
                            <Tag color="cyan">cyan</Tag>
                        </div>
                        <div className={'user-list-desc-dt'}>
                            <span>
                                0
                                {/*<Tag className={'test-tag'} color="magenta">mark</Tag>*/}
                            </span>
                            <span>0</span>
                            <span>0</span>
                            <span><SettingOutlined /></span>
                        </div>
                        <div className={'user-list-desc-detail'}>
                            Address: Xi'an Shanxi
                        </div>
                        <div className={'user-list-desc-content'}>
                            Ant Design interprets the color system into two levels: a system-level color system and a product-level color system.
                            Ant Design's design team preferred to design with the HSB color model,
                            which makes it easier for designers to have a clear psychological expectation of color when adjusting colors,
                            as well as facilitate communication in teams.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInfo;
