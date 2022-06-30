import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'

export const store = createStore({
  state: {
    newsList: [],
    jobsList: [],
    askList: []
  },
  getters: {
    fetchedAsk(state) {
      return state.askList
    }
  },
  mutations,
  actions
})