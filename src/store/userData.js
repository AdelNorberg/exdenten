import Vue from 'vue';

let = {
  avatarUrl: '',
  nickname: ''
}

export default {
  state: {
    profile: defaultProfile,
    notificationMsgs: null
  },
  mutations: {
    SET_PROFILE_DATA(state, payload) {
      state.profile = payload
    },
    SET_NOTIFICATION_MSGS(state, payload) {
      state.notificationMsgs = payload
    }
  },
  actions: {
    LOAD_USER_PROFILE({commit}, payload) {
      commit('SET_PROCCESSING', true)
      let userProfileRef = Vue.$db.collection('profile').doc(payload)
      
      userProfileRef.get()
        .then((data) => {
          let profile = data.exists ? data.data() : defaultProfile
          commit('SET_PROFILE_DATA', profile)
          commit('SET_PROCCESSING', false)
        })
        .catch((error) => {
          Vue.prototype.$message({
            type: 'error',
            message: error.message
          })
          commit('SET_PROCCESSING', false)
        })
    }
  }
}