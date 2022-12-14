/* pakage.json에 있는 것들은 node_modules에 설치되어 있고 node_modules에 있는 것들은 
경로필요없이 패키지명만 입력하면 import가 가능하다.*/
import axios from "axios";

// 1. HTTP Request % Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
async function fetchNewsList() {
    // return axios.get(conig.baseUrl + 'news/1.json')
    try {
        return await axios.get(`${config.baseUrl}news/1.json`);
    } catch (error) {
        console.log(error);
    }
}

async function fetchJobsList() {
    try {
        return await axios.get(`${config.baseUrl}jobs/1.json`);
    } catch (error) {
        console.log(error);
    }
}
async function fetchAskList() {
    try {
        return await axios.get(`${config.baseUrl}ask/1.json`);
    } catch (error) {
        console.log(error);
    }

}

async function fetchList(pageName) {
    try {
        return await axios.get(`${config.baseUrl}${pageName}/1.json`)

    } catch (error) {
        console.log(error);
    }
}

async function fetchUserInfo(userName) {
    try {
        return await axios.get(`${config.baseUrl}user/${userName}.json`);
    } catch (error) {
        console.log(error);
    }
}

async function fetchItemInfo(id) {
    try {
        return await axios.get(`${config.baseUrl}item/${id}.json`);
    } catch (error) {
        console.log(error);
    }
}



export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchList,
    fetchUserInfo,
    fetchItemInfo,
}