import * as React from 'react';
import {Modal, Typography, Avatar, Table, Button} from 'antd';
import {PlayCircleTwoTone, HeartTwoTone} from '@ant-design/icons';
import {getSearch} from '../../request/request';
import {inject, observer} from 'mobx-react';
import './index.scss';

function DetailList(props) {
    const columns = React.useMemo(() => [{
        render() {
            return <Avatar src={'http://p3.music.126.net/Uk2n3ATMpuq2nl08IkL4bQ==/109951165803262106.jpg?param=140y140'} />
        },
        width: 48
    }, {
        title: 'artist',
        dataIndex: 'artist',
        width: 200
    }, {
        title: 'song',
        dataIndex: 'recommend_music',
        render(song) {
            return (
                <Typography.Paragraph
                    ellipsis={{
                        tooltip: true
                    }}
                    className={'detail-modal-table-music'}
                >
                    {song}
                </Typography.Paragraph>
            );
        },
    }, {
        render(record) {
            return (
                <>
                    <Button onClick={() => clickToStart(record)} icon={<PlayCircleTwoTone />} size={'small'}/>
                    <Button icon={<HeartTwoTone />} size={'small'} />
                </>
            );
        },
        width: 80
    }], []);

    const clickToStart = item => {
        const record = {name: item.recommend_music};
        if (item.isTitle) {
            record.id = item.recommend_id;
            props.rootStore.clickPlay(record);
        } else {
            getSearch(item.recommend_music)
                .then(({data}) => {
                    record.id = data.result.songs[0].id;
                    props.rootStore.clickPlay(record);
                })
                .catch(e => {
                    console.error(e);
                });
        }
    };
    const renderTable = React.useMemo(() => (
        <Table
            className={'detail-modal-table'}
            dataSource={props.data}
            columns={columns}
            scroll={{y: 260}}
            pagination={false}
        />
    ), [props.data]);

    return (
        <Modal
            className={'detail-modal'}
            title="Song list details"
            visible={props.visible}
            footer={null}
            onCancel={props.changeVisible.bind(this)}
        >
            {renderTable}
        </Modal>
    );
}

export default inject('rootStore')(observer(DetailList));
