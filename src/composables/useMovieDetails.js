import { ref } from 'vue'
import movieDBApi from '@/api/movieDBApi'


const useMovieDetails = (id) => {
  const film = ref({})
  const isLoading = ref(true)
  const errMessage = ref('')

  const getMovie = async (id) => {
    try {
      if (id) {
        isLoading.value = true

        const { data } = await movieDBApi.get(`/movie/${id}`)

        if (data) {
          film.value = data
        }

        isLoading.value = false
      }
    }
    catch(e) {
      console.log(e)
    }
  }

  getMovie(id)

  return {
    isLoading,
    errMessage,
    film,

    getMovie
  }
}


export default useMovieDetails