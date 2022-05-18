import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import movieDBApi from '@/api/movieDBApi'


const useMovies = () => {
  const store = useStore()
  const nowPlaying = ref([])
  const topRated = ref([])
  const upcoming = ref([])
  const followedMovies = ref([])
  const isLoading = ref(true)
  const errMessage = ref('ref')

  const getMovies = async() => {
    isLoading.value = true

    const nowPlayingPromise = await movieDBApi.get(`/movie/now_playing`)
    const topRatedPromise = await movieDBApi.get(`/movie/top_rated`)
    const upcommingPromise = await movieDBApi.get(`/movie/upcoming`)
    const followed = computed(() => store.getters['allFollowedMovies']) 
    const followedPromise = await Promise.all(followed.value.map( async(movie) => {
      if (movie) {
        return await movieDBApi.get(`/movie/${movie.id}`)
      }
      
    }))

    const data = await Promise.all([
      nowPlayingPromise, 
      topRatedPromise,
      upcommingPromise,
      followedPromise
    ]);

    console.log(data)
    if (data) {
      nowPlaying.value = data[0].data.results
      topRated.value = data[1].data.results
      upcoming.value = data[2].data.results
      followedMovies.value = data[3].map((movie) => movie.data)
    }

    isLoading.value = false
  }

  getMovies()

  return {
    isLoading,
    errMessage,
    nowPlaying,
    topRated,
    upcoming,
    followedMovies,

    getMovies
  }
}


export default useMovies;