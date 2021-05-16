import * as React from 'react';
import {List, Typography, Badge, Button} from 'antd';
import {PlayCircleTwoTone, HeartTwoTone, DownCircleTwoTone} from '@ant-design/icons';

import {inject, observer} from 'mobx-react';
import './index.scss';

function MusicCard(props) {
    const data = props.data.slice(0, 10);
    const first = props.data[0].name;

    const musicPlayer = item => {
        props.rootStore.clickPlay(item);
    }

    const renderListItem = item => {
        const Item = () => {
            return (
                <List.Item
                    className={props.rootStore.playerState && 'music-card-list-item'}
                >
                    <Typography.Text
                        ellipsis={{
                            tooltip: true
                        }}
                        className={'music-card-list-item'}
                    >
                        {item.name}
                    </Typography.Text>
                    <div className={'music-card-list-actions'}>
                        <Button icon={<PlayCircleTwoTone twoToneColor="#eb2f96" />}
                                onClick={() => musicPlayer(item)}
                                size={'small'}
                        />
                        <Button icon={<HeartTwoTone twoToneColor="#eb2f96" />} onClick={() => musicPlayer(item)} size={'small'} />
                        <Button icon={<DownCircleTwoTone twoToneColor="#eb2f96" />} onClick={() => musicPlayer(item)} size={'small'} />
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

// export default MusicCard;
export default inject('rootStore')(observer(MusicCard));
