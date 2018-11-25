import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import {messages} from '../res/messages'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lang: 'th',
        email: '',
        password: '',
        isShowDialog: false,
        loginPageState: 'login'
    },
    getters: {
        messages : state => {
            switch(state.lang){
                case 'en':
                    return messages.en
                case 'th':
                    return messages.th
            }
        }
    },
    mutations: {
        toThai : state => {
            state.lang = 'th'
        },
        toEng : state => {
            state.lang = 'en'
        },
        changeEmail : (state, emailInput) => {
            state.email = emailInput
        },
        changePassword : (state, passwordInput) => {
            state.password = passwordInput
        },
        showDialog : (state, isShowDialog)=>{
            state.isShowDialog = isShowDialog
        },
        toggleLogin : state => {
            state.loginPageState = state.loginPageState == 'login' ? 'register' : 'login';
        }
    },
    actions: {
        toThai : context => {
            context.commit('toThai')
        },
        toEng : context => {
            context.commit('toEng')
        },
        onChangeEmail : (context, emailInput) => {
            context.commit('changeEmail',emailInput)
        },
        onChangePassword : (context, passwordInput) => {
            context.commit('changePassword',passwordInput)
        },
        changeShowDialog : (context, isShowDialog) => {
            context.commit('showDialog',isShowDialog)
        },
        toggleLoginPage : context => {
            context.commit('toggleLogin')
        }
    }
})