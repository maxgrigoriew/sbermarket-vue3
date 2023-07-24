import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      count: 0,
      favorites: [
        {
          id: 1,
          isFavoriteStatus: true
        },
        {
          id: 2,
          isFavoriteStatus: true
        },
        {
          id: 3,
          isFavoriteStatus: false
        },
        {
          id: 4,
          isFavoriteStatus: true
        },
        {
          id: 5,
          isFavoriteStatus: false
        },
        {
          id: 6,
          isFavoriteStatus: true
        },
        {
          id: 7,
          isFavoriteStatus: true
        }
      ]
    }
  },
  getters: {
    getFavorites(state) {
      return state.favorites
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    changeFavoriteStatus(state, id) {
      console.log(id)

      const findItem = state.favorites.find(item => item.id === id)
      if (findItem) {
        findItem.isFavoriteStatus = !findItem.isFavoriteStatus
      }
    }
  }
})
