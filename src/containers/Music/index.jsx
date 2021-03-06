import * as React from 'react';
import {observer, inject} from 'mobx-react';
import {withTranslation} from 'react-i18next';
import RecommendList from '../../components/ProfileCard';
import UserInfo from '../../components/UserInfo';
import { shuffle, chunk } from 'lodash-es';
import {Spin} from 'antd';
import {getRecommendList, getSongHistory} from '../../request/request';
import IMAGES from '../../common/images/musicAvatar';

import './index.scss';

const shuffledImages = shuffle(IMAGES).slice(8);

@inject('rootStore')
@observer
@withTranslation()
class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            loading: false
        };
    }

    async getData() {
        this.setState(prev => prev.loading = true);
        const userId = this.props.rootStore.userId;
        const [{data: reData}, {data: hData}] = await Promise.all([getRecommendList(userId), getSongHistory(userId)]);
        const {singer_song: songs} = reData.pop();
        const chunkedData = chunk(reData, 20);
        // recommend songs
        const singerSongs = shuffle(
            songs
                .map(parse => parse.code === 200 ? parse.result.songs : null)
                .filter(i => !!i)
                .reduce((a, b) => a.concat(b), [])
                .slice(0, 20)
        ).map(item => {
            const params = {
                isTitle: true,
                recommend_id: item.id,
                recommend_music: item.name,
                artist: item.artists[0].name
            };
            return params;
        });
        // history songs
        const res = hData.map((item, index) => {
            return {
                recommend_id: index,
                recommend_music: item.title,
                artist: item.artist_name
            };
        });
        this.setState(prev => {
            return prev.dataSource = [...chunkedData, singerSongs, res];
        });

        this.setState(prev => prev.loading = false);
        this.props.rootStore.musicData = this.state.dataSource;
    }

    componentDidMount() {
        const {musicData} = this.props.rootStore;
        musicData.length === 0 && this.getData();
        musicData.length !== 0 && (
            this.setState(prev => {
                return prev.dataSource = [...musicData];
            })
        );

    }

    render() {
        const data = this.state.dataSource;

        const title = ['Recommend List', 'Recommend List', 'Recommend List', 'Recommend List', 'History'];
        return (
            <Spin spinning={this.state.loading} size={'large'}>
                <div className={'page music'}>
                    <div className={'music-main'}>
                        <div className={'music-main-line'}></div>
                        {data.map((item, index) => (
                            <div className={'music-main-list'}>
                                <p className={'description-text'}>{this.props.t(title[index])}</p>
                                <RecommendList
                                    index={index}
                                    desc={index}
                                    data={item}
                                    coverSrc={shuffledImages[index]}
                                    className={'music-main-list-card'}
                                />
                            </div>
                        ))}

                        <div className={'music-main-profile'}>
                            {this.props.t('Profile')}
                            <UserInfo />
                        </div>
                    </div>
                </div>
            </Spin>
        );
    };
}

export default Music;
