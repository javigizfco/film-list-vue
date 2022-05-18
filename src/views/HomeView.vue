<template>
  <div class="main-container">
    <div class="container">
      <h1>En cartelera</h1>
      <div v-if=!isLoading class='card-container'>
        <div v-for='film in nowPlaying' :key=film.id class="item" >
          <CardMovie :film=film />
        </div>
      </div>
    </div>
    <div class="container">
      <h1>Mejor valoradas</h1>
      <div v-if=!isLoading class='card-container'>
        <div v-for='film in topRated' :key=film.id class="item" >
          <CardMovie :film=film />
        </div>
      </div>
    </div>
    <div class="container">
      <h1>Próximos estrenos</h1>
      <div v-if=!isLoading class='card-container'>
        <div v-for='film in upcoming' :key=film.id class="item" >
          <CardMovie :film=film />
        </div>
      </div>
    </div>
    <div class="container">
      <h1>Siguiendo</h1>
      <div v-if=!isLoading class='card-container'>
        <div v-for='film in followedMovies' :key=film.id class="item" >
          <CardMovie :film=film />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import CardMovie from '@/components/CardMovie'
import useMovies from '@/composables/useMovies'

export default {
  name: 'HomeView',

  components: {
    CardMovie
  },

  setup() {
    const {
      isLoading,
      errMessage,
      nowPlaying,
      topRated,
      upcoming,
      followedMovies,

    } = useMovies()
    
    return {
      isLoading,
      nowPlaying,
      topRated,
      upcoming,
      followedMovies
    }
  }
}
</script>


<style lang="scss" scoped>
  .main-container {
    .container {
      padding: 2rem;
      margin: 2rem 0 4rem 0;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7);
	    border-radius: 10px;
      background-color: #1f242d;

      h1 {
        font-size: 2.5rem;
      }
      .card-container {
        display: flex;
        padding: 2rem;
        flex-wrap: wrap;
      }
    }
    
  }
</style>