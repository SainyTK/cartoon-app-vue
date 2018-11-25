import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import {messages} from '../res/messages'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lang: 'th'
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
        }
    },
    actions: {
        toThai : context => {
            context.commit('toThai')
        },
        toEng : context => {
            context.commit('toEng')
        }
    }
})