import firebase from 'firebase';
import Vue from 'vue';

export default {
  state: {
    isAuthenticated: false,
    uid: null
  },
  mutations: {
    SET_USER(state, payload) {
      state.isAuthenticated = true 
      state.uid = payload
    },
    UNSET_USER(state) {
      state.isAuthenticated = false
      state.uid = null
    } 
  },
  actions: {
    SIGNUP ({commit}, {email, pass}) {
      commit('SET_PROCCESSING', true)
      commit('CLEAR_ERROR')
      firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then(() => {
          commit('SET_PROCCESSING', false)
        })
        .catch((error) => {
          Vue.prototype.$message({
              type: 'info',
              message: error.message
          })
          commit('SET_PROCCESSING', false)
        });
    },
    SIGNIN ({commit}, {email, pass}) {
      commit('SET_PROCCESSING', true)
      commit('CLEAR_ERROR')
      firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(() => {
        commit('SET_PROCCESSING', false)
      })
      .catch(error => {
        Vue.prototype.$message({
          type: 'info',
          message: 'Incorrect login or password'
        })
        commit('SET_PROCCESSING', false)
      });
    },
    SIGNOUT() {
      firebase.auth().signOut()
    },
    STATE_CHANGED({commit, dispatch}, payload) {
      if(payload){
        commit('SET_USER', payload.uid)
        dispatch('LOAD_USER_PROFILE', payload.uid)
      } else {
        commit('UNSET_USER')
      }
    }
  },
  getters: {
    userId: (state) => state.uid,
    isUserAuthenticated: (state) => state.isAuthenticated
  }
}