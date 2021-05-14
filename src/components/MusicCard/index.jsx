import * as React from 'react';
import {List, Typography, Badge, Card} from 'antd';
import {PlayCircleTwoTone, HeartTwoTone, DownCircleTwoTone} from '@ant-design/icons';

import './index.scss';

function MusicCard(props) {
    const data = props.data.slice(0, 10);
    const first = props.data[0].name;
    const renderListItem = item => {
        const Item = () => {
            return (
                <List.Item>
                    <Typography.Text
                        ellipsis={{
                            tooltip: true
                        }}
                        className={'music-card-list-item'}
                    >
                        {item.name}
                    </Typography.Text>
                    <div className={'music-card-list-actions'}>
                        <a href="#" title={'play'} className={'music-card-list-item-a'}><PlayCircleTwoTone twoToneColor="#eb2f96" /></a>
                        <a href="#" title={'like'} className={'music-card-list-item-a'}><HeartTwoTone twoToneColor="#eb2f96" /></a>
                        <a href="#" title={'download'} className={'music-card-list-item-a'}><DownCircleTwoTone twoToneColor="#eb2f96" /></a>
                    </div>
                </List.Item>
            );
        };
        return (
            item.name === first
                ?
                <Badge.Ribbon text={'No.1!'} color={'volcano'}>
                    <Item />
                </Badge.Ribbon>
                :
                <Item />
        );
    };

    return (
        <div className={'music-card'}>
            <List
                className={'music-card-list'}
                dataSource={data}
                renderItem={renderListItem}
            />
        </div>
    );
}

export default MusicCard;
