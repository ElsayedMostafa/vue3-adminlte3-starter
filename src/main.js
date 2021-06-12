import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

require('@/store/subscriber')
import './main.scss'

store.dispatch('auth/attempt', localStorage.getItem('token'))
    .then(() => {
        createApp(App).use(store).use(router).mount('#app')
    })


//createApp(App).mount('#app')
