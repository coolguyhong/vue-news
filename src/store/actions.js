import {fetchAskList, fetchJobsList, fetchNewsList} from '@/api';

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(response => {
        commit('SET_NEWS', response.data)
      })
      .catch(error => {
        console.error(error)
      })
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then(response => {
        context.commit('SET_JOBS', response.data)
      })
      .catch(error => {
        console.error(error)
      })
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data)
      })
      .catch(error => {
        console.error(error)
      })
  }
}