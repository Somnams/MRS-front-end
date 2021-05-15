import * as React from 'react';
import {observer, inject} from 'mobx-react';
import RecommendList from "../../components/ProfileCard";
import UserInfo from "../../components/UserInfo";
import { shuffle, chunk } from 'lodash-es';
import {getRecommendList, getSongHistory} from '../../request/request';
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
    }

    async getData() {
        const userId = this.props.rootStore.userId;
        const [{data: reData}, {data: hData}] = await Promise.all([getRecommendList(userId), getSongHistory(userId)]);
        const {singer_song: songs} = reData.pop();
        const chunkedData = chunk(reData, 20);

        const singerSongs = shuffle(
            songs
                .map(parse => parse.code === 200 ? parse.result.songs : null)
                .filter(i => !!i)
                .reduce((a, b) => a.concat(b), [])
                .slice(0, 20)
        ).map((item, index) => {
            const params = {
                recommend_id: index,
                recommend_music: item.name,
                artist: item.artists[0].name
            };
            return params;
        });

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
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        const data = this.state.dataSource;

        return (
            <div className={'page music'}>
                <div className={'music-main'}>
                    <div className={'music-main-line'}></div>
                    {data.map((item, index) => (
                        <div className={'music-main-list'}>
                            <p className={'description-text'}>Recommend List</p>
                            <RecommendList
                                desc={index}
                                data={item}
                                coverSrc={shuffledImages[index]}
                                className={'music-main-list-card'}
                            />
                        </div>
                    ))}

                   <div className={'music-main-profile'}>
                       Profile
                       <UserInfo />
                   </div>
                </div>
            </div>
        );
    };
}

export default Music;
