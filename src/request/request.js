import axios from './index';

export const getRisingSong = () => axios.get('/music/rising');
export const getNewSong = () => axios.get('/music/newSong');
export const getPopularSong = () => axios.get('/music/popular');

export const getRecommendList = userId => axios.get(`/music/${userId}`);

export const getSongHistory = userId => axios.get(`/music/history/${userId}`);
