import axios from 'axios';
//trebuie instalat axios din terminal

const KEY = 'AIzaSyAiiGKQRt-1oHcT_1zCFrK7Ydaupd-SAzQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});


