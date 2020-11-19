import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Index from './pages/Index/IndexComponent';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
 
const routers = [
  {path:'/',component: Index },
]

let router = new VueRouter({
  mode: 'history',
  routes : routers
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
