import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from "../views/UserView.vue"
import NewsView from "../views/NewsView.vue"
import AskView from "../views/AskView.vue"
import JobsView from "../views/JobsView.vue"
import ItemView from "../views/ItemView.vue"
import bus from '../utils/bus.js';
import { store } from '../store/index.js';
// import createListView from '../views/CreateListView.js';

Vue.use(VueRouter);

function fetchData(to, from, next) {

    bus.$emit('start:spinner');
    store.dispatch("FETCH_LIST", to.name)
        .then(() => next())
        .catch((error) => {
            console.log(error);
        });
}


export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news',
            name: 'news',
            // component: createListView('NewsView')
            component: NewsView,
            beforeEnter: fetchData,
        },
        {
            path: '/ask',
            name: 'ask',
            // component: createListView('AskView')
            component: AskView,
            beforeEnter: fetchData,
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: createListView('JobsView')
            component: JobsView,
            beforeEnter: fetchData,
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
    ],
});