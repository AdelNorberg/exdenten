import firebase from "firebase";
import Vue from "vue";
import { SET_USER, UNSET_USER } from "./mutation-types";
import { SIGNUP, SIGNIN, SIGNOUT, STATE_CHANGED } from "./action-types";

export default {
  state: {
    isAuthenticated: false,
    uid: null
  },
  mutations: {
    [SET_USER](state, payload) {
      state.isAuthenticated = true;
      state.uid = payload;
    },
    [UNSET_USER](state) {
      state.isAuthenticated = false;
      state.uid = null;
    }
  },
  actions: {
    async [SIGNUP]({ commit }, { email, pass }) {
      commit("SET_PROCCESSING", true);
      commit("CLEAR_ERROR");
      try {
        firebase.auth().createUserWithEmailAndPassword(email, pass);
        commit("SET_PROCCESSING", false);
      } catch (e) {
        Vue.prototype.$message({
          type: "info",
          message: e.message
        });
        commit("SET_PROCCESSING", false);
      }
    },
    async [SIGNIN]({ commit }, { email, pass }) {
      commit("SET_PROCCESSING", true);
      commit("CLEAR_ERROR");

      try {
        firebase.auth().signInWithEmailAndPassword(email, pass);
        commit("SET_PROCCESSING", false);
      } catch {
        Vue.prototype.$message({
          type: "info",
          message: "Incorrect login or password"
        });
        commit("SET_PROCCESSING", false);
      }
    },
    async [SIGNOUT]() {
      await firebase.auth().signOut();
    },
    async [STATE_CHANGED]({ commit, dispatch }, payload) {
      if (payload) {
        commit("SET_USER", payload.uid);
        dispatch("LOAD_USER_PROFILE", payload.uid);
      } else {
        commit("UNSET_USER");
      }
    }
  },
  getters: {
    userId: state => state.uid,
    isUserAuthenticated: state => state.isAuthenticated
  }
};
