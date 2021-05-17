import * as React from 'react';
import {inject, observer} from 'mobx-react';

import './index.scss';

function MusicPlayer(props) {
    const audioRef = React.createRef();
    React.useEffect(() => {
        audioRef.current.src = props.rootStore.playerURL;
    }, [props.rootStore.playerURL]);
    return (
        <div className={'player'}>
            <audio ref={audioRef} controls autoPlay />
            <div className={'player-name'}>{props.rootStore.playerSong}</div>
        </div>
    );
}

export default inject('rootStore')(observer(MusicPlayer));
