import {observable} from 'mobx';
import {getSong} from '../request/request';
import {message} from 'antd';

export default observable({
    userId: window.localStorage.getItem('mrs-storage')
        ?
        JSON.parse(atob(window.localStorage.getItem('mrs-storage').split('.')[1]))['user_id']
        :
        0,
    username: window.localStorage.getItem('mrs-storage')
        ?
        JSON.parse(atob(window.localStorage.getItem('mrs-storage').split('.')[1]))['user_name']
        :
        '',
    playerURL: '',
    playerState: false,
    playerSong: '',
    // start player
    clickPlay(item) {
        const {id, name} = item;
        if (this.playerState) {
            this.playerState = false;
        } else {
            getSong(id)
                .then(({data}) => {
                    this.playerURL = data.data[0].url;
                    if (!this.playerURL) {
                        message.error('版权问题，暂不可播放');
                    }
                    this.playerState = true;
                    this.playerSong = name;
                })
                .catch(e => {
                    console.error(e);
                });
        }
    }
});
