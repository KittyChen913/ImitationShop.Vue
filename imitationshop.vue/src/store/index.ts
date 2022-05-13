import { createStore } from 'vuex'

export default createStore({
  state: {
    items: {},
    itemDetail: {}
  },
  getters: {
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload
    },
    setItemDetail(state, payload) {
      state.itemDetail = payload
    }
  },
  actions: {
    fetchItemList(context) {
      fetch('https://localhost:7227/api/Items')
        .then(response => response.json())
        .then(data => context.commit('setItems', data))
    },
    fetchItemDetail(context, payload) {
      fetch('https://localhost:7227/api/Items/' + payload)
        .then(response => response.json())
        .then(data => context.commit('setItemDetail', data))
    }
  },
  modules: {
  }
})
