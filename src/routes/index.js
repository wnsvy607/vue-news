import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from "../views/UserView.vue"
import NewsView from "../views/NewsView.vue"
import AskView from "../views/AskView.vue"
import JobsView from "../views/JobsView.vue"
import ItemView from "../views/ItemView.vue"
// import createListView from '../views/CreateListView.js';

Vue.use(VueRouter);

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
        },
        {
            path: '/ask',
            name: 'ask',
            // component: createListView('AskView')
            component: AskView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: createListView('JobsView')
            component: JobsView,
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