const user = {
  state: {
    userInfo: null
  },
  mutations: {
    getUserInfo(state, userInfo) {
      console.log(userInfo)
      state.userInfo = userInfo
    }
  },
  actions: {

  }
}

export default user