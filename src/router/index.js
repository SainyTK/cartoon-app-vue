import Vue from 'vue'
import Router from 'vue-router'
import Developer from '../components/Developer'
import Login from '../components/Login'
import Register from '../components/Register'
import Main from '../components/Main'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requireGuest: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
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
