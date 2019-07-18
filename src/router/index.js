import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/user_login'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/login',
      name: 'user_login',
      component: login
    }
  ]
})
