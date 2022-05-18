import { createStore } from 'vuex'


export default createStore({
  state: {
    followedMovies: []
  },

  mutations: {
    followMovie(state, id) {
      if (state.followedMovies.findIndex( movies => movies.id === id) === -1) {
        state.followedMovies.push({
          id: id  
        })
      }
    },

    unfollowMovie(state, id) {
      const index = state.followedMovies.findIndex( movies => movies.id === id)
      state.followedMovies.splice(index, 1)
    }
  },

  actions: {

  },

  getters: {
    allFollowedMovies: (state) => state.followedMovies,
    isFollowedMovie: ( state ) => ( id ) => {
      return state.followedMovies.findIndex( movies => movies.id === id) > -1
    }
  },

  modules: {

  }
})