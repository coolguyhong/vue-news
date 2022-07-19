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
    return fetchNewsList()
      .then(response => {
        commit('SET_NEWS', response.data)
      })
      .catch(error => {
        console.error(error)
      })
  },
  FETCH_JOBS(context) {
    return fetchJobsList()
      .then(response => {
        context.commit('SET_JOBS', response.data)
      })
      .catch(error => {
        console.error(error)
      })
  },
  FETCH_ASK({ commit }) {
    return fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data)
      })
      .catch(error => {
        console.error(error)
      })
  },
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data)
      })
      .catch(error => {
        console.error(error)
      })
  },
  FETCH_ITEM({ commit }, id) {
    return fetchItemInfo(id)
      .then(({ data }) => {
        commit('SET_ITEM', data)
      })
      .catch(error => {
        console.error(error)
      })
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(response => {
        commit('SET_LIST', response.data)
      })
      .catch(error => console.error(error))
  }
}