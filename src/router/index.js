import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/user_login'
import Main from '../views/main'

Vue.use(Router)

export default new Router({
  mode:'history',     //去掉路由中的#
  routes: [
    { 
      path: '',
      name: 'user_login',
      component: login
    },
    {
    	//首页
    	path:'/main',
    	name:'Main',
    	component:Main
    }
  ]
})
