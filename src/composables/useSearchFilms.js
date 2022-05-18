import { ref } from 'vue'
import movieDBApi from '@/api/movieDBApi'


const useSearchFilms = (text) => {
  const films = ref([])
  const isLoading = ref(true)
  const errMessage = ref('')

  const searchFilms = async (searchedText) => {
    try {
      if (searchedText) {
        isLoading.value = true

        const { data } = await movieDBApi.get('/search/movie/', { 
          params: { 
            query: searchedText, 
          }
        })

        if (data && data.results) {
          films.value = data.results
        }

        isLoading.value = false
      }
      else {
        films.value = []
      }
    }
    catch(e) {
      console.log(e)
    }
  }

  searchFilms(text)

  return {
    isLoading,
    errMessage,
    films,

    searchFilms
  }
}


export default useSearchFilms