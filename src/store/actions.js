import {
  fetchAskList,
  fetchJobsList,
  fetchNewsList,
  fetchList,
  fetchUserInfo,
  fetchItemInfo
} from '@/api'

export default {
  async FETCH_NEWS({ commit }) {
    try {
      const response = await fetchNewsList()
      commit('SET_NEWS', response.data)
      return response
    } catch (error) {
      console.error(error)
    }
  },
  async FETCH_JOBS(context) {
    try {
      const response = await fetchJobsList()
      context.commit('SET_JOBS', response.data)
      return response
    } catch (error) {
      console.error(error)
    }
  },
  async FETCH_ASK({ commit }) {
    const response = await fetchAskList()
    commit('SET_ASK', response.data)
    return response
  },
  async FETCH_USER({ commit }, name) {
    try {
      const response = await fetchUserInfo(name)
      commit('SET_USER', response.data)
      return response
    } catch (error) {
      console.error(error)
    }
  },
  async FETCH_ITEM({ commit }, id) {
    try {
      const response = await fetchItemInfo(id)
      commit('SET_ITEM', response.data)
      return response
    } catch (error) {
      console.error(error)
    }
  },
  async FETCH_LIST({ commit }, pageName) {
    try {
      const response = await fetchList(pageName);
      commit('SET_LIST', response.data)
      return response
    } catch (error) {
      console.error(error)
    }
  }
}