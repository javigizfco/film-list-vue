<template>
  <div class="main-container">
    <h1>{{ title }}</h1>
    <div><span class="label">Título Original: </span><span class="description">{{ originalTitle }}</span></div>
    <div><span class="label">Año: </span><span class="description">{{ year }}</span></div>
    <div><span class="label">País: </span><span class="description">{{ country }}</span></div>
    <div><span class="label">Productora: </span><span class="description">{{ company }}</span></div>
    <div><span class="label">Sinopsis: </span><span class="description">{{ sinopsis }}</span></div>
  </div>
</template>


<script>
export default {
  name: 'MovieMainDetails',
  
  props: {
    film:{
      type: Object,
      required: true
    } 
  },

  setup(props) {
    const title = props.film.title
    const originalTitle = props.film.original_title
    const year = props.film.release_date.split("-")[0] ? props.film.release_date.split("-")[0] : "???"
    const country = props.film.production_countries[0] ? props.film.production_countries[0].iso_3166_1 : "???"
    const company = props.film.production_companies[0] ? props.film.production_companies[0].name : "???"
    const sinopsis = props.film.overview ?? "???"

    return {
      company,
      country,
      originalTitle,
      sinopsis,
      title,
      year
    }
  },
}
</script>


<style lang="scss" scoped>
  .main-container {
    padding-left: 2rem;
    border-left: solid thin #2c3e50;

    h1{
      font-weight: bold;
    }

    .description {
      font-size: 1.5rem;
    }

    .label {
      font-size: 1.25rem;
      opacity: 0.7;
    }
  }
</style>