import * as React from 'react';
import {Avatar, Tag} from 'antd';
import {withTranslation} from 'react-i18next';
import {SettingOutlined} from '@ant-design/icons';
import {inject, observer} from 'mobx-react';
import './index.scss';

@inject('rootStore')
@observer
@withTranslation()
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
                            {this.props.rootStore.username}
                            <Tag className={'test-tag'} color="magenta">2000</Tag>
                            <Tag color="volcano">♀</Tag>
                            <Tag color="gold">rapper</Tag>
                            <Tag color="cyan">cyan</Tag>
                        </div>
                        <div className={'user-list-desc-dt'}>
                            <span>0 <div className={'span-tag'}>{this.props.t('Following')}</div></span>
                            <span>0 <div className={'span-tag'}>{this.props.t('Followers')}</div></span>
                            <span>0 <div className={'span-tag'}>{this.props.t('Dynamic')}</div></span>
                            <span><SettingOutlined /></span>
                        </div>
                        <div className={'user-list-desc-detail'}>
                            Address: Xi'an Shanxi
                        </div>
                        <div className={'user-list-desc-content'}>
                            这个人很懒，什么都没有留下 ~ ~
                            {/*The person was lazy and left nothing behind*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInfo;
