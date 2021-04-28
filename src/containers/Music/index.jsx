import * as React from 'react';
import axios from '../../request';
import {Table, Space} from 'antd';
import RootStore from '../../store/rootStore';
import {observer} from 'mobx-react';

import './index.scss';

class Music extends React.Component {
    constructor(props) {
        super(props);

        this.cols = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id',
                render: text => <a>{text}</a>
            }, {
                title: 'name',
                dataIndex: 'name',
                key: 'name'
            }, {
                title: 'artist',
                dataIndex: 'artist',
                key: 'artist'
            }, {
                title: 'action',
                key: 'action',
                render: (text, record) => (
                    <Space size={'middle'}>
                        <a>click</a>
                        <a>{record.name}</a>
                    </Space>
                )
            }
        ];
        this.dataSource = [
            {
                key: '1',
                id: 1,
                name: 'John Brown',
                artist: 'GaGa'
            }
        ];
    }

    getRecommendList() {
        // const userId =
        // axios.get('/music')
        //     .then(({data}) => {
        //         console.log(data);
        //     })
        //     .catch(e => {
        //         console.error(e);
        //     });
    }

    initTableSource() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id',
                render: text => <a>{text}</a>
            }, {
                title: 'name',
                dataIndex: 'name',
                key: 'name'
            }, {
                title: 'artist',
                dataIndex: 'artist',
                key: 'artist'
            }, {
                title: 'action',
                key: 'action',
                render: (text, record) => (
                    <Space size={'middle'}>
                        <a>click</a>
                        <a>{record.name}</a>
                    </Space>
                )
            }
        ];

        const data = [
            {
                key: '1',
                id: 1,
                name: 'John Brown',
                artist: 'GaGa'
            }
        ]
    }

    componentDidMount() {
        // get list
    }

    render() {
        return (
            <div className={'music'}>
                <Table columns={this.cols} dataSource={this.dataSource} className={'music-list'} />
                <div className={'music-play'}>play now</div>
                <h1>{RootStore.userId}</h1>
                <h1>{RootStore.userIdPlus}</h1>
            </div>
        );
    };
};

export default observer(Music);
