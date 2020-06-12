import Vue from 'vue'
import Vuex from 'vuex'

//import axios from 'axios'
//import { urlPosts } from '/urls'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        formTares: []
    },
    actions : {
        getForm({ commit }, formTareasA) {
            commit('getFormMutacion', formTareasA)
        }
    },
    mutations : {
        getFormMutacion(state, formTareasM) {
            state.formTareas = formTareasM
        }
    }
})