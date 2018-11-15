export default {
  state: {
    proccessing: false,
    error: false
  },
  mutations: {
    SET_PROCCESSING(state, payload) {
      state.proccessing = payload
    },
    SET_ERROR(state, payload) {
      state.error = payload
    },
    CLEAR_ERROR(state) {
      state.error = null
    }
  },
  getters: {
    getProccessing: (state) => state.proccessing,
    getError: (state) => state.error
  }
}