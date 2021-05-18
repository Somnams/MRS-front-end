import * as React from 'react';
import MusicCard from '../../components/MusicCard';
import {useTranslation} from 'react-i18next';
import {getNewSong, getPopularSong, getRisingSong} from '../../request/request';
import './index.scss';
import {observer, inject} from 'mobx-react';


function Home(props) {
    const [musicData, setMusicData] = React.useState([]);
    const {t} = useTranslation();

    React.useEffect(() => {
        const {homeData} = props.rootStore;
        homeData.length === 0 && getMusicData();
        homeData.length !== 0 && setMusicData(homeData);
    }, []);

    const getMusicData = async () => {
        const data = await Promise.all([getRisingSong(), getNewSong(), getPopularSong()]);
        const result = data.map(item => item.data.result.tracks);
        setMusicData(result);
        props.rootStore.homeData = result;
    };

    const renderCard = React.useMemo(() => {
        const types = ['Rising', 'New', 'Popular'];

        return musicData.map((item, index) => {
            return (
                <div>
                    <p className={'description-text home-p'}>{t(types[index])}</p>
                    <MusicCard data={item} />
                </div>
            );
        });
    }, [musicData])

    return (
        <div className={'page home'}>
            {renderCard}
        </div>
    );
}

export default inject('rootStore')(observer(Home));
