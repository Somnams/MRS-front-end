import * as React from 'react';
import {Modal, List, Typography, Avatar, Skeleton, Table, Button} from 'antd';
import { useTranslation } from 'react-i18next';
import {PlayCircleOutlined, HeartOutlined} from '@ant-design/icons';
import './index.scss';

function DetailList(props) {
    const columns = React.useMemo(() => [{
        render(_, record) {
            return <Avatar src={'http://p1.music.126.net/ReF_unoFwy7jJT_vmHJ-zg==/109951164972836700.jpg?param=140y140'} />
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
        render() {
            // !!
            return (
                <>
                    <PlayCircleOutlined /> <HeartOutlined />
                </>
            );
        },
        width: 80
    }], []);

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

export default DetailList;
