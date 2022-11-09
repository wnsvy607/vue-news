import { fetchNewsList, fetchJobsList, fetchAskList, fetchList, fetchUserInfo, fetchItemInfo } from '../api/index.js';

export default {
    async FETCH_NEWS({ commit }) {
        const res = await fetchNewsList();
        commit('SET_NEWS', res.data);
        //async 함수는 어떤 것을 return 해도 반드시 promise 객체를 반환하게 되어있다.
        return res;
    },
    async FETCH_JOBS({ commit }) {
        const res = await fetchJobsList();
        commit('SET_JOBS', res.data);
        return res;
    },
    // FETCH_ASK(context) {
    async FETCH_ASK({ commit }) {
        const res = await fetchAskList();
        commit('SET_ASK', res.data);
        return res;
    },
    async FETCH_USER({ commit }, name) {
        const res = await fetchUserInfo(name);
        commit('SET_USER', res.data);
        return res;
    },
    async FETCH_ITEM({ commit }, id) {
        const res = await fetchItemInfo(id);
        commit('SET_ITEM', res.data);
        return res;
    },
    async FETCH_LIST({ commit }, pageName) {
        const res = await fetchList(pageName)
        commit('SET_LIST', res.data);
        return res;
    },
}