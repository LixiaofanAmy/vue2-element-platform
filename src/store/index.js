import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nodeCode: '',
  },
  mutations: {
    changeFirstMenu(state, { oMenu, menuName }) {
      state.nodeCode = oMenu.nodeCode
      menuName === oMenu.menuName
        ? null
        : router.replace({ name: oMenu.menuName })
    },
  },
  actions: {},
  modules: {},
})
