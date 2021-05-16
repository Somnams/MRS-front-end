import * as React from 'react';
import {inject, observer} from 'mobx-react';
import {message} from 'antd';

import './index.scss';

function MusicPlayer(props) {
    const audioRef = React.createRef();
    React.useEffect(() => {
        audioRef.current.src = props.rootStore.playerURL;
        if (!props.rootStore.playerURL) {
            message.error('版权问题，暂不可播放');
        }
    }, [props.rootStore.playerURL]);
    return (
        <div className={'player'}>
            <audio ref={audioRef} controls autoPlay />
            <div className={'player-name'}>{props.rootStore.playerSong}</div>
        </div>
    );
}

export default inject('rootStore')(observer(MusicPlayer));
