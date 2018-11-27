import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import 'es6-promise/auto'
import {messages} from '../res/messages'
import {developerInfo} from '../res/developerInfo'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lang: 'th',
        email: '',
        password: '',
        isShowDialog: false,
        showLogin: true,
        cartoonImageUrl: []
    },
    getters: {
        messages : state => {
            switch(state.lang){
                case 'en':
                    return messages.en
                case 'th':
                    return messages.th
            }
        },
        developers : state => {
            switch(state.lang){
                case 'en':
                    return developerInfo.en
                case 'th':
                    return developerInfo.th
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
            state.showLogin = !state.showLogin
        },
        loadCartoonImage : (state,imageUrl) => {
            state.cartoonImageUrl.push(imageUrl)
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
            context.commit('changeEmail','')
            context.commit('changePassword','')
            context.commit('toggleLogin')
        },
        openDialog : context => {
            console.log(context.state.isShowDialog)
            context.commit('showDialog',true)
        },
        closeDialog : context => {
            console.log(context.state.isShowDialog)
            context.commit('showDialog',false)
        },
        loadCartoonImage : async context => {
            const storage = firebase.storage()
            for(let i=1;i<=20;i++){
                let pageNum = (i+'').padStart(3,'0')
                const pathReference = storage.refFromURL(`gs://cartoon-app-fb2f5.appspot.com/OnePice/ตอนที่ 1/OnePiece01_Page_${pageNum}.jpg`)
                await pathReference.getDownloadURL().then(url => {
                context.commit('loadCartoonImage',url)
                })
            }
        }
    }
})