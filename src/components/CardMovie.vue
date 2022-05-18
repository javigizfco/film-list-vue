<template>
  <div @click="goToDetails" class='card'>
    <img :src=posterPath :alt=title>
    <h2 class="title">
      {{ title }}
    </h2>
    <h4>
      {{ originalTitle }}
    </h4>
    <h6>
      Año: {{ year }} Rating: {{ voteAverage }}
    </h6>
  </div>
</template>


<script>
import { useRouter } from 'vue-router'

export default {
  name: 'CardMovie',

  props: {
    film: {
      type: Object,
      required: true
    },
  },

  setup(props) {
    const router = useRouter()
    const posterPath = `https://image.tmdb.org/t/p/w500/${props.film.poster_path}`
    const title = props.film.title
    const originalTitle = props.film.original_title
    const year = props.film.release_date.split("-")[0]
    const voteAverage = props.film.vote_average

    const goToDetails = () => {
      router.push({ name: 'details', params: { id: props.film.id }})
    }

    return {
      originalTitle,
      posterPath,
      title,
      voteAverage,
      year,

      goToDetails
    }    
  }
}
</script>


<style lang="scss" scoped>
  .card{
    flex: 1;
    height: auto;
    width: 150px;
    text-align: center;
    margin: 1.25rem;
    cursor: pointer;


    img {
      max-height: 100%;
      max-width: 100%;
      border: solid thin white;
    }

    h2 {
      font-weight: bold;
      font-size: 1.5rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;  
      overflow: hidden;
    }

    h4 {
      font-size: 1.3rem;
      opacity: 0.8;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;  
      overflow: hidden;
    }

    h6 {
      font-size: 1.2rem;
      opacity: 0.5
    }
  }
</style>