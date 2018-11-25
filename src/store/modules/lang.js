const state = {
    lang: 'en'
}

const getters = {
    currentLang: (state) => state.lang
}

const actions = {
    changeLangToThai(){
        commit('toThai')
    },
    changeLangToEng(){
        commit('toEng')
    }
}
const mutations = {
    toThai(state){
        state.lang = 'th'
    },
    toEng(state){
        state.lang = 'en'
    }
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}