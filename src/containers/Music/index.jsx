import * as React from 'react';
import axios from '../../request';
import {Table, Space} from 'antd';
import {observer, inject} from 'mobx-react';

import './index.scss';

@inject('rootStore')
@observer
class Music extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: []
        };
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
                        <a>{record.artist}</a>
                    </Space>
                )
            }
        ];
    }

    getRecommendList() {
        const userId = this.props.rootStore.userId;
        if (userId !== 0) {
            axios.get(`/music/${userId}`)
                .then(({data}) => {
                    const a = data.map((val, key) => {
                        return {
                            key: `${key}`,
                            id: key + 1,
                            name: val.recommend_music,
                            artist: val.artist
                        }
                    });
                    console.log(this.state.dataSource);
                    this.setState(prev => {
                        return {prev: prev.dataSource = a};
                    });
                    console.log(this.state.dataSource);
                })
                .catch(e => {
                    console.error(e);
                });
        }
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
        this.getRecommendList();
    }

    componentWillUnmount() {
        this.setState = (state, callback) =>{
            return;
        }
    }

    render() {
        // const rootStore = this.props.rootStore;

        return (
            <div className={'music'}>
                <Table columns={this.cols} dataSource={this.state.dataSource} className={'music-list'} />
                {/*<div className={'music-play'}>play now</div>*/}
            </div>
        );
    };
};

export default Music;
