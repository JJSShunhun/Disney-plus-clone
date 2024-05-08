import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "685e3887b4592441329fed63ba28a12f",
        language: "ko-KR"
    }
})

export default instance;