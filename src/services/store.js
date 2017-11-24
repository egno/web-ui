import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    apiUrl: './static/',
    appTitle: 'Приложение',
    loggedIn: false,
    navigatorVisible: true,
    navMenuItems: null,
    urls: {
      NavMenuItems: 'menu.json',
      UserInfo: 'user_info.json'
    },
    userInfo: null
  },
  getters: {
    apiUrl: (state) => {
      return state.apiUrl
    },
    appTitle: (state) => {
      return state.appTitle
    },
    loggedIn: (state) => {
      return (state.loggedIn)
    },
    navigatorVisible: (state) => {
      return (state.navigatorVisible)
    },
    navMenuItems: (state) => {
      return (state.navMenuItems)
    },
    userInfo: (state) => {
      return (state.userInfo)
    }
  },
  mutations: {
    logIn: (state) => {
      state.loggedIn = true
    },
    logOut: (state) => {
      state.userInfo = null
      state.loggedIn = false
    },
    setNavMenuItems: (state, payload) => {
      state.navMenuItems = payload
    },
    setUserInfo: (state, payload) => {
      state.userInfo = payload
    },
    toggleNavigator: (state, payload) => {
      state.navigatorVisible = !state.navigatorVisible
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
        commit(mutation, null)
        console.log(e)
      })
    },
    logIn: ({dispatch, commit}) => {
      dispatch('loadRestData', 'UserInfo')
      commit('logIn')
      dispatch('loadRestData', 'NavMenuItems')
    },
    logOut: ({dispatch, commit}) => {
      commit('logOut')
      dispatch('loadRestData', 'NavMenuItems')
    },
    toggleNavigator: ({commit}) => {
      commit('toggleNavigator')
    }
  }
})
