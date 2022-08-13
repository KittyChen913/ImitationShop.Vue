import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import router from '@/router'

export default createStore({
  state: {
    items: {},
    itemDetail: {},
    userProfile: {}
  },
  getters: {
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload
    },
    setItemDetail(state, payload) {
      state.itemDetail = payload
    },
    setUserProfile(state, payload) {
      state.userProfile = payload
    },
    saveLocalStorage(state, payload) {
      localStorage.setItem("Token", payload.Token);
      localStorage.setItem("UserName", payload.UserName);
    },
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
    },
    UserLogin(context, payload) {
      fetch('https://localhost:7227/api/Auth/UserLogin', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ "RequestId": uuidv4(), "Data": payload })
      })
        .then(async response => {
          const responseData = await response.json()
          if (!response.ok) {
            switch (responseData.ErrorCode) {
              case 'U0002':
                alert('This user does not exist.')
                break;
              case 'U0003':
                alert('The account password is incorrect. Please try again.')
                break;
              default:
                alert('Unexpected error, please contact customer service.')
                break;
            }
            console.log(responseData.ErrorCode, responseData.ErrorMessage)
          } else {
            alert('Welcome 【' + responseData.Data.UserName + '】 to login.')
            context.commit('setUserProfile', responseData.Data)
            context.commit('saveLocalStorage', responseData.Data)

            router.push({ path: `/` })
          }
        })
        .catch(error => console.log(error))
    },
    UserRegister(context, payload) {
      fetch('https://localhost:7227/api/Auth/UserRegister', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ "RequestId": uuidv4(), "Data": payload })
      })
        .then(async response => {
          const responseData = await response.json()
          if (!response.ok) {
            switch (responseData.ErrorCode) {
              case 'U0001':
                alert('This user name already exists. Please try another one.')
                break;
              default:
                alert('Unexpected error, please contact customer service.')
                break;
            }
            console.log(responseData.ErrorCode, responseData.ErrorMessage)
          } else {
            alert('Account registered successfully. Please login.')
            router.push({ path: `/login` })
          }
        })
        .catch(error => console.log(error))
    }
  },
  modules: {
  }
})
