import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Index from './pages/Index/IndexComponent';
import LoginComponent from './pages/Login/LoginComponent';
import RegisterComponent from './pages/Register/RegisterComponent';
import ChatComponent from './pages/Chat/ChatComponent'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
 
const routers = [
  {path:'/',component: Index },
  {path:'/login',component: LoginComponent},
  {path:'/register',component: RegisterComponent},
  {path:'/chat',component: ChatComponent}


]

let router = new VueRouter({
  mode: 'history',
  routes : routers
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
