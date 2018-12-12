import Vue from "vue";
import {
  SET_PROFILE_DATA,
  SET_PROFILE_IMG,
  SET_NOTIFICATION_MSGS,
  SET_BASE_SETTINGS
} from "./mutation-types";
import {
  LOAD_USER_PROFILE,
  LOAD_AVATAR,
  LOAD_USER_NOTIFICATION,
  UPDATE_PROFILE
} from "./action-types";

let defaultProfile = {
  avatarUrl: "",
  nickname: "",
  name: "",
  description: ""
};

export default {
  state: {
    profile: defaultProfile,
    profileAvatar: null,
    notificationMsgs: null
  },
  mutations: {
    [SET_PROFILE_DATA](state, payload) {
      state.profile = payload;
    },
    [SET_PROFILE_IMG](state, payload) {
      state.profileAvatar = payload;
    },
    [SET_NOTIFICATION_MSGS](state, payload) {
      state.notificationMsgs = payload;
    },
    [SET_BASE_SETTINGS](state, payload) {
      state.profile = payload;
    }
  },
  actions: {
    async [LOAD_USER_PROFILE]({ commit, dispatch }, payload) {
      commit("SET_PROCCESSING", true);

      try {
        let data = await Vue.$db
          .collection("userProfile")
          .doc(payload)
          .get();
        dispatch("LOAD_AVATAR");

        let profile = data.exists ? data.data() : defaultProfile;
        commit("SET_PROFILE_DATA", profile);
        commit("SET_PROCCESSING", false);
      } catch (e) {
        Vue.prototype.$message({ type: "error", message: e.message });
        commit("SET_PROCCESSING", false);
      }
    },
    async [LOAD_AVATAR]({ commit, getters }) {
      try {
        const url = await Vue.$storageRef
          .child(`profilePhotos/${getters.userId}/avatar.jpg`)
          .getDownloadURL();
        commit("SET_PROFILE_IMG", url);
      } catch (e) {
        commit(
          "SET_PROFILE_IMG",
          false
        );
      }
    },
    async [LOAD_USER_NOTIFICATION]({ commit, getters }) {
      commit("SET_PROCCESSING", true);
      await Vue.$db.collection("userNotification").doc(getters.userId);
      //...
    },
    async [UPDATE_PROFILE]({ commit, getters }, payload) {
      commit("SET_PROCCESSING", true);
      const { newProfile, avatarFile, avatarUrl } = payload;
      const uid = getters.userId;

      try {
        await Vue.$db
          .collection("userProfile")
          .doc(uid)
          .set(newProfile);

        if (avatarFile) {
          await Vue.$storageRef
            .child(`profilePhotos/${uid}/avatar.jpg`)
            .put(avatarFile);
          commit("SET_PROFILE_IMG", avatarUrl);
        }

        Vue.prototype.$message({
          type: "success",
          message: "Success. Base settings saved"
        });
        commit("SET_PROFILE_DATA", newProfile);
        commit("SET_PROCCESSING", false);
      } catch (e) {
        Vue.prototype.$message({ type: "error", message: e.message });
        commit("SET_PROCCESSING", false);
      }
    }
  },
  getters: {
    getProfile: state => state.profile,
    getProfileAvatar: state => state.profileAvatar
  }
};
