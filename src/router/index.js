import Vue from 'vue'
import Router from 'vue-router'
import Developer from '../components/Developer'
import Login from '../components/Login'
import Register from '../components/Register'
import Main from '../components/Main'
import Card from '../components/Carddeverloper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/developer',
      name: 'Developer',
      component: Developer
    },{
      path:'/carddeveloper',
      name: 'Carddeveloper',
      component:Card
    }
  ]
})
