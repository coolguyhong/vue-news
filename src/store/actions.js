import {
  fetchAskList,
  fetchJobsList,
  fetchNewsList,
  fetchList,
  fetchUserInfo,
  fetchItemInfo
} from '@/api'

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(response => {
        commit('SET_NEWS', response.data)
        return response
      })
      .catch(error => {
        console.error(error)
      })
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then(response => {
        context.commit('SET_JOBS', response.data)
        return response
      })
      .catch(error => {
        console.error(error)
      })
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data)
        return data
      })
      .catch(error => {
        console.error(error)
      })
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data)
      })
      .catch(error => {
        console.error(error)
      })
  },
  FETCH_ITEM({ commit }, id) {
    fetchItemInfo(id)
      .then(({ data }) => {
        commit('SET_ITEM', data)
      })
      .catch(error => {
        console.error(error)
      })
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => commit('SET_LIST', data))
      .catch(error => console.error(error))
  }
}