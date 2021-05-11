import * as React from 'react';
import MusicCard from '../../components/MusicCard';
import { withTranslation } from 'react-i18next';
import './index.scss';

@withTranslation()
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div className={'page home'}>
               <div>
                   <p className={'home-p'}>飙升榜</p>
                   <MusicCard />
               </div>
               <div>
                   <p className={'home-p'}>新歌榜</p>
                   <MusicCard />
               </div>
               <div>
                   <p className={'home-p'}>原创榜</p>
                   <MusicCard />
               </div>
           </div>
        );
    }
}

export default Home;
