import * as React from 'react';
import MusicCard from '../../components/MusicCard';
import {getNewSong, getPopularSong, getRisingSong} from '../../request/request';
import './index.scss';


function Home() {
    const [musicData, setMusicData] = React.useState([]);

    React.useEffect(() => {
        getMusicData();
    }, []);

    const getMusicData = async () => {
        const data = await Promise.all([getRisingSong(), getNewSong(), getPopularSong()]);
        const result = data.map(item => item.data.result.tracks);
        setMusicData(result);
    };

    const renderCard = React.useMemo(() => {
        const types = ['Rising', 'New', 'Popular'];

        return musicData.map((item, index) => {
            return (
                <div>
                    <p className={'description-text home-p'}>{types[index]}</p>
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

export default Home;
