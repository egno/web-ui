import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    apiUrl: './static/',
    appTitle: 'Приложение',
    urls: {
      NavMenuItems: 'menu.json',
      UserInfo: 'user_info.json'
    },
    navMenuItems: null,
    userInfo: null
  },
  getters: {
    apiUrl: (state) => {
      return state.apiUrl
    },
    appTitle: (state) => {
      return state.appTitle
    },
    navMenuItems: (state) => {
      return (state.navMenuItems)
    },
    userInfo: (state) => {
      return (state.userInfo)
    }
  },
  mutations: {
    setNavMenuItems: (state, payload) => {
      state.navMenuItems = payload
    },
    setUserInfo: (state, payload) => {
      state.userInfo = payload
    }
  },
  actions: {
    loadRestData: ({commit, state}, payload) => {
      const url = state.urls[payload]
      const mutation = 'set' + payload
      if (!url) return
      return axios.get(state.apiUrl + url)
      .then(response => {
        commit(mutation, response.data)
      })
      .catch(e => {
        console.log(e)
      })
    }
  }
})
