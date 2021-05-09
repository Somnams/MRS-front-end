import {observable} from 'mobx';

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
});
