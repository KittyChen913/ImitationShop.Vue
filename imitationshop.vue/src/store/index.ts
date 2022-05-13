import { createStore } from 'vuex'

export default createStore({
  state: {
    items: {}
  },
  getters: {
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload
    }
  },
  actions: {
    fetchItemList(context) {
      fetch('https://localhost:7227/api/Items')
        .then(response => response.json())
        .then(data => context.commit('setItems', data))
    }
  },
  modules: {
  }
})
