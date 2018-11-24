// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './config/firebaseinit'
import firebase from 'firebase'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

// Vue.config.productionTip = false

let app;
/* eslint-disable no-new */

firebase.auth().onAuthStateChanged(user =>{
  if(!app){
    app = new Vue({
      el: '#app',
      router,
      render: h => h(App)
    })
  }  
})
