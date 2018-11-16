import storage from '@/utils/storage'
import * as types from '../mutaion'
const app = {
  state: {
    firstLogin: storage.getStorage('firstLogin') || 'yep',
    version: 'Alpha 1.0',
  },
  mutations: {
    [types.SET_FIRSTLOGIN]: state => {
      state.firstLogin = 'nope'
      storage.setStorage('firstLogin', 'nope')
    }
  },
  actions: {
    toggleSideBar({ commit }) {
      let state = ''
      storage.get('sliderState') === 'full'
        ? (state = 'collapse')
        : (state = 'full')
      commit(types.SET_SLIDERSTATE, state)
    },
    setFirstLogin({ commit }) {
      commit(types.SET_FIRSTLOGIN)
    }
  }
}

export default app
