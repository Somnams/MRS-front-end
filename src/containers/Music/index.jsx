import * as React from 'react';
import axios from '../../request';
import {Space} from 'antd';
import {observer, inject} from 'mobx-react';
import RecommendList from "../../components/ProfileCard";
import { shuffle } from 'lodash-es';
import IMAGES from '../../common/images/musicAvatar';

import './index.scss';

const shuffledImages = shuffle(IMAGES).slice(8);

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

    componentWillUnmount() {
        this.setState = (state, callback) =>{
            return;
        }
    }

    render() {
        const collections = Array(8).fill({
            listType: 'recommend',
            title: 'Profile'
        });

        return (
            <div className={'page music'}>
                <div className={'music-main'}>
                    {collections.map((item, index) => (
                        <div className={'music-main-list'}>
                            <p className={'description-text'}>{item.title}</p>
                            <RecommendList
                                listType={item.listType}
                                coverSrc={shuffledImages[index]}
                                className={'music-main-list-card'}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    };
}

export default Music;
