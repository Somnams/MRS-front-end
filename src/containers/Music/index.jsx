import * as React from 'react';
import axios from '../../request';
import {Table, Space} from 'antd';
import {observer, inject} from 'mobx-react';
import RecommendList from "../../components/RecommendList";

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
                    this.setState(prev => {
                        return {prev: prev.dataSource = a};
                    });
                })
                .catch(e => {
                    console.error(e);
                });
        }
    }

    componentDidMount() {
        // this.getRecommendList();
    }

    componentWillUnmount() {
        this.setState = (state, callback) =>{
            return;
        }
    }

    render() {
        return (
            <div className={'page music'}>
                <div className={'music-main'}>
                    <div>
                        <p className={'description-text'}>RECOMMEND LIST</p>
                        <RecommendList />
                    </div>
                </div>
                {/*<p className={'description-text'}>Music Recommend List</p>*/}
                {/*<Table*/}
                {/*    columns={this.cols}*/}
                {/*    dataSource={this.state.dataSource}*/}
                {/*    scroll={{ y: 350 }}*/}
                {/*    className={'music-list'}*/}
                {/*    pagination={false}*/}
                {/*/>*/}
                {/*<div className={'music-play'}>play now</div>*/}
            </div>
        );
    };
}

export default Music;
