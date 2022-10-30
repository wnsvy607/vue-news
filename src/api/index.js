/* pakage.json에 있는 것들은 node_modules에 설치되어 있고 node_modules에 있는 것들은 
경로필요없이 패키지명만 입력하면 import가 가능하다.*/
import axios from "axios";

// 1. HTTP Request % Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
function fetchNewsList() {
    // return axios.get(conig.baseUrl + 'news/1.json')
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}
function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}
export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
}