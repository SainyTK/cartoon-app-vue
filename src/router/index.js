import Vue from 'vue'
import Router from 'vue-router'
import Developer from '../components/Developer'
import LoginView from '../components/LoginView'
import Main from '../components/Main'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: {
        requireGuest: true
      }
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/developer',
      name: 'Developer',
      component: Developer,
      meta: {
        requireAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requireAuth)) {
    if(!firebase.auth().currentUser) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requireGuest)){
    if (firebase.auth().currentUser) {
      next ({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  }
  next()
})

export default router;
