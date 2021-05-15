import * as React from 'react';
import './index.scss';

function MusicPlayer(props) {
    const url = props.url;
    return (
        <audio controls className={'player'}>
            <source src={url} type={'audio/mpeg'}/>
        </audio>
    );
}

export default MusicPlayer;
