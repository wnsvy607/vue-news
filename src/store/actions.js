import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo } from '../api/index.js';

export default {
    FETCH_NEWS({commit}) {
        fetchNewsList()
            .then(({data}) => {
                commit('SET_NEWS', data);
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_JOBS({commit}) {
        fetchJobsList()
            .then(({ data }) => {
                commit('SET_JOBS', data);
            })
            .catch(err => {
                console.log(err);
            })
    },
    // FETCH_ASK(context) {
    FETCH_ASK({commit}) {
        fetchAskList()
        .then(({ data }) => {
            // context.commit('SET_ASK', data);
            commit('SET_ASK', data)
        })
        .catch(err => {
            console.log(err);
        })
    },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
        .then(({data}) => {
            commit('SET_USER', data);
        })
        .catch((err) => {
            console.log(err);
        });
    }
}