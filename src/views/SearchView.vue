<template>
  <div class="main-container">
    <div class="main">
      Resultados de la búsqueda:  {{ text || 'Sin resultados' }}
    </div>
    <div v-if=!isLoading class='card-container'>
      <div v-for='film in films' :key=film.id class="item" >
        <CardMovie :film=film />
      </div>
    </div>
  </div>
</template>


<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import CardMovie from '@/components/CardMovie'
import useSearchFilms from '@/composables/useSearchFilms'

export default {
  name: 'SearchView',
  
  components: {
    CardMovie
  },

  setup() {
    const route = useRoute()
    const text = ref(route.params.searchText)

    const { 
      isLoading,
      errMessage,
      films,
      searchFilms
    } = useSearchFilms(route.params.searchText)

    watch(
      () => route.params.searchText,
      () => { 
        text.value = route.params.searchText
        searchFilms(route.params.searchText)
      }
    )

    return {
      isLoading,
      text,
      films
    }
  },
}
</script>


<style lang="scss" scoped>
  .main-container {
    .card-container {
      display: flex;
      padding: 2rem;
      flex-wrap: wrap;
    }
  }

</style>