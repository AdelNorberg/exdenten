import Vue from 'vue';

let defaultProfile = {
  avatarUrl: '',
  nickname: '',
  name: '',
  description: ''
}

export default {
  state: {
    profile: defaultProfile,
    profileAvatar: null,
    notificationMsgs: null
  },
  mutations: {
    SET_PROFILE_DATA(state, payload) {
      state.profile = payload
    },
    SET_NOTIFICATION_MSGS(state, payload) {
      state.notificationMsgs = payload
    },
    SET_BASE_SETTINGS(state, payload) {
      state.profile = payload
    }
  },
  actions: {
    LOAD_USER_PROFILE({commit}, payload) {

      commit('SET_PROCCESSING', true)
      
      let userProfileRef = Vue.$db.collection('profile').doc(payload)

      //profile: text format
      userProfileRef.get()
        .then(data => {
          let profile = data.exists ? data.data() : defaultProfile
          commit('SET_PROFILE_DATA', profile)
          commit('SET_PROCCESSING', false)
        })
        .catch(error => {
          Vue.prototype.$message({
            type: 'error',
            message: error.message
          })
          commit('SET_PROCCESSING', false)
        })
    },
    LOAD_USER_NOTIFICATION({commit, getters}) {
      commit('SET_PROCCESSING', true)
      let userNotifRef = Vue.$db.collection('userNotification').doc(getters.userId)
      //...
    },
    LOAD_AVATAR({commit}, payload) {
      //...
    },
    UPDATE_PROFILE({commit, getters}, payload) {
      commit('SET_PROCCESSING', true)

      const { newProfile, avatarFile } = payload;
      
      console.log(getters.userId)

      if(avatarFile) 
        Vue.$storageRef.child(`profilePhotos/${getters.userId}/avatar.jpg`).put(avatarFile)
          .then(() => {
            commit('SET_PROCCESSING', false)
            //доделать
          })
          .catch(error => {
            Vue.prototype.$message({
              type: 'error',
              message: error.message
            })
            commit('SET_PROCCESSING', false)
          });
    }
  }
}