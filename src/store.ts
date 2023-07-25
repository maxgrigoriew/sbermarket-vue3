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
      ],
      isOpenLoginModal: true
    }
  },
  getters: {
    getFavorites(state) {
      return state.favorites
    }
  },
  mutations: {
    setFavoriteStatus(state) {
      if (localStorage.getItem('favorites')) {
        state.favorites = JSON.parse(localStorage.getItem('favorites'))
      }
    },

    changeFavoriteStatus(state, id) {
      const findItem = state.favorites.find(item => item.id === id)
      if (findItem) {
        findItem.isFavoriteStatus = !findItem.isFavoriteStatus
      }
    },

    openModal(state) {
      state.isOpenLoginModal = true
      document.querySelector('body')?.classList.add('active')
    },

    closeModal(state) {
      state.isOpenLoginModal = false
      document.querySelector('body')?.classList.remove('active')
    }
  },
  actions: {
    localStorageFavoriteStatus({ commit, state }, id) {
      commit('changeFavoriteStatus', id)
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    }
  }
})
