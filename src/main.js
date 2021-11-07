import { createApp } from 'vue'
import App from './App.vue'
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";

import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'a',
            component: () => import('./components/index')
        },
        {
            path: '/index',
            name: 'b',
            component: () => import('./components/index')
        },
        {
            path: '/submit',
            name: 'c',
            component: () => import('./components/submit')
        },
        {
            path: '/my',
            name: 'my',
            component: () => import('./components/my')
        },
        {
            path: '/shop',
            name: 'shop',
            component: () => import('./components/shop')
        },
        {
            path: '/data',
            name: 'data',
            component: () => import('./components/data')
        }
    ],
})

createApp(App).use(router).use(NutUI).mount("#app");