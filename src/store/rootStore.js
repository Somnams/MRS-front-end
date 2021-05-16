import {observable} from 'mobx';
import {getSong} from '../request/request';

export default observable({
    // user_id: window.localStorage.getItem('madblog-token') ? JSON.parse(atob(window.localStorage.getItem('madblog-token').split('.')[1])).user_id : 0
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
                    this.playerState = true;
                    this.playerSong = name;
                })
                .catch(e => {
                    console.error(e);
                });
        }
    },
    getSongDetail(song) {
        console.log(song);
    },
    setPlayerState() {
        console.log('set state');
    }
});
