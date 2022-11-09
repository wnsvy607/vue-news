import { fetchNewsList, fetchJobsList, fetchAskList, fetchList, fetchUserInfo, fetchItemInfo } from '../api/index.js';

export default {
    FETCH_NEWS({ commit }) {
        return fetchNewsList()
            .then((res) => {
                commit('SET_NEWS', res.data);
                return res;
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_JOBS({ commit }) {
        return fetchJobsList()
            .then(({ data }) => {
                commit('SET_JOBS', data);
            })
            .catch(err => {
                console.log(err);
            })
    },
    // FETCH_ASK(context) {
    FETCH_ASK({ commit }) {
        return fetchAskList()
            .then(({ data }) => {
                // context.commit('SET_ASK', data);
                commit('SET_ASK', data)
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER', data);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    FETCH_ITEM({ commit }, id) {
        return fetchItemInfo(id)
            .then(({ data }) => {
                commit('SET_ITEM', data);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then(({ data }) => commit('SET_LIST', data))
            .catch((error) => console.log(error));
    },
}