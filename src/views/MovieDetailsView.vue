<template>
  <div class="container">
    <div v-if=!film>Sin resultados</div>
    <MovieSecondaryDetails v-if=!isLoading :film=film />
    <MovieMainDetails v-if=!isLoading :film=film />
  </div>
</template>


<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import MovieMainDetails from '@/components/MovieMainDetails'
import MovieSecondaryDetails from '@/components/MovieSecondaryDetails'
import useMovieDetails from '@/composables/useMovieDetails'

export default {
  name: 'MovieDetailsView',

  components: {
    MovieMainDetails,
    MovieSecondaryDetails
  },
  
  setup() {
    const route = useRoute()
    const text = ref(route.params.id)

    const {
      isLoading,
      errMessage,
      film,
      getMovie
    } = useMovieDetails(route.params.id)

    watch(
      () => route.params.id,
      () => getMovie(route.params.id)
    )

    return {
      isLoading,
      film,
      text
    }
  },
}
</script>


<style lang="scss" scoped>
  .container {
    display: flex;
    flex: 1;
  }
</style>