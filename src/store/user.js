import firebase from 'firebase';

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
      state = {
        isAuthenticated: false,
        uid: null
      }
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
          commit('SET_PROCCESSING', false)
          commit('SET_ERROR', error.message)
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
        commit('SET_PROCCESSING', false)
        commit('SET_ERROR', error.message)
      });
    },
    STATE_CHANGED({commit}, payload) {
      if(payload){
        commit('SET_USER', payload.uid)
      } else {
        commit('UNSET_USER')
      }
    }
  },
  getters: {
    isUserAuthenticated: (state) => state.isAuthenticated
  }
}