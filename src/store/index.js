import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import general from "./general";
import userData from "./userData";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    general,
    userData
  }
});
