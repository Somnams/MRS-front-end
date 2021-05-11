import * as React from 'react';
import {List, Typography, Badge, Card} from 'antd';
import {PlayCircleTwoTone, HeartTwoTone, DownCircleTwoTone} from '@ant-design/icons';

import './index.scss';

class MusicCard extends React.Component {
    constructor(props) {
        super(props);
    }

    renderListItem(item) {
        const Item = () => {
            return (
                <List.Item>
                    <Typography.Text className={'music-card-list-item'}>
                        {item.content}
                        <a href="#" title={'play'} className={'music-card-list-item-a'}><PlayCircleTwoTone twoToneColor="#eb2f96" /></a>
                        <a href="#" title={'like'} className={'music-card-list-item-a'}><HeartTwoTone twoToneColor="#eb2f96" /></a>
                        <a href="#" title={'download'} className={'music-card-list-item-a'}><DownCircleTwoTone twoToneColor="#eb2f96" /></a>
                    </Typography.Text>
                </List.Item>
            );
        };
        return (
            item.badge
                ?
                <Badge.Ribbon text={item.badge} color={'volcano'}>
                    <Item />
                </Badge.Ribbon>
                :
                <Item />
        );
    }

    render() {
        const data = [
            {badge: 'No. 1 !', content: '假摔'},
            {content: '海底（Live'},
            {content: '多少'},
            {content: 'もう少しだけ'},
            {content: '同一时刻'},
            {content: '爱人错过 (Live)'},
            {content: '吉他初恋'},
            {content: '吉他初恋'},
            {content: '吉他初恋'},
        ];
        return (
            <div className={'music-card'}>
                <List
                    className={'music-card-list'}
                    dataSource={data}
                    renderItem={this.renderListItem.bind(this)}
                />
            </div>
        );
    }
}


export default MusicCard;
