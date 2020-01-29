import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui' // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
Vue.use(ElementUI)
Vue.use(VueRouter)

import Login from './components/Login'
import TodoList from './components/TodoList'

const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[{
    path:'/',
    component:Login
  },{
    path:'/todolist',
    component:TodoList
  },{
    path:'*',
    redirect:'/'
  }]
})
new Vue({
  router:router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
