import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import RlUi from '../src'

// require styles
import '../packages/theme/base/src/index.less'

Vue.config.productionTip = false
const router = new VueRouter({
    routes
})

Vue.use(VueRouter)
Vue.use(RlUi)



window.app = new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
