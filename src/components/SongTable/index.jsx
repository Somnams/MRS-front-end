import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {inject, observer} from 'mobx-react';
import {Avatar, Button, Table, Typography} from 'antd';
import {HeartTwoTone, PlayCircleTwoTone} from "@ant-design/icons";
import {getSearch} from "../../request/request";

function SongTable(props) {
    const {t} = useTranslation();
    const columns = React.useMemo(() => [{
        render() {
            return <Avatar src={'http://p3.music.126.net/Uk2n3ATMpuq2nl08IkL4bQ==/109951165803262106.jpg?param=140y140'} />
        },
        width: 48
    }, {
        title: t('artist'),
        dataIndex: 'artist',
        width: 200
    }, {
        title: t('song'),
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
    return (
        <Table
            dataSource={props.data}
            columns={columns}
            scroll={{y: props.scroll}}
            pagination={false}
        />
    );
}

export default inject('rootStore')(observer(SongTable));
