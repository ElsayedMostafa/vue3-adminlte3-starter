import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Master'
import Dashboard from '@/views/pages/Test'
import store from '@/store'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: Dashboard
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/login'),
        meta: {
            public: true,
            disableIfLoggedIn: true
        }

    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    linkActiveClass: 'active',
    routes
})

router.beforeEach((to, from, next) => {
    // if the route is not public
    if (!to.meta['public']) {
        // if the user authenticated
        if (store.getters['auth/authenticated']) {
            // continue to the route
           return next();
        } else {
            // set redirect to path after login
            let redirect = {};
            if (to.name !== 'Dashboard') {
                redirect = {redirect: to.path};
            }
            // redirect to login
            return next({name: 'login', query: redirect});
        }
    }
    // if the user is authenticated and the route is disabled for authenticated window
    if (store.getters['auth/authenticated'] && to.meta['disableIfLoggedIn']) {
      return next({name: 'Dashboard'});
    }

    next();
});

export default router
