import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        headerSelected:'home'
    },
    mutations: {
        changeSelected: (state, tag) => {
            state.headerSelected = tag
        },
    }
})