import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import getters from './getters'

const store = new Vuex.Store({
  modules: {
    app,
    permission,
    user
  },
  getters,
  strict: false
})

export default store