import storage from '@/utils/storage'
import * as types from '../mutaion'
const app = {
  state: {
    firstLogin: storage.getStorage('firstLogin') || 'yep',
    version: 'Alpha 1.0',
    sidebar: {
      sliderState: 'open'
    }
  },
  mutations: {
    [types.SET_FIRSTLOGIN]: state => {
      state.firstLogin = 'nope'
      storage.setStorage('firstLogin', 'nope')
    },
    [types.SET_SLIDERSTATE]: (state, newSliderState) => {
      state.sidebar.sliderState = newSliderState
      storage.setStorage('sliderState', newSliderState)
    }
  },
  actions: {
    setFirstLogin({ commit }) {
      commit(types.SET_FIRSTLOGIN)
    }
  }
}

export default app
