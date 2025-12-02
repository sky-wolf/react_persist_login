import axios from 'axios';
const BASE_URL = 'https://localhost:7095'

export default axios.create({
    //baseURL: BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    //'Access-Control-Allow-Credentials': true
});

export const axiosPrivate = axios.create({
    //baseURL: BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    //'Access-Control-Allow-Credentials': true
});