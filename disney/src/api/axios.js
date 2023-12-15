import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "9441125e75299f50edc87dbfa94a2732",
        lagnguage: "ko-KR",
    }
})

export default instance;