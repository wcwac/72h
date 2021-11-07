import { createApp } from 'vue'
import App from './App.vue'
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";

import { createRouter, createWebHistory } from 'vue-router'
import index from './components/index'
import submit from './components/submit'
import my from './components/my'
import shop from './components/shop'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'a',
            component: index
        },
        {
            path: '/index',
            name: 'b',
            component: index
        },
        {
            path: '/submit',
            name: 'c',
            component: submit
        },
        {
            path: '/my',
            name: 'my',
            component: my
        },
        {
            path: '/shop',
            name: 'shop',
            component: shop
        }
    ],
})

createApp(App).use(router).use(NutUI).mount("#app");