<template>
  <div class="main-container">
    <img :src=posterPath :alt=title >
    <div class="ratings">
      <span class="voteAverage">{{ voteAverage }}</span>
      <span @click='follow' class="personalFollow" :class="isFollowed ? 'unfollow-style' : 'follow-style'"> {{ followText }} </span>
    </div>
  </div>
</template>


<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'MovieSecondaryDetails',

  props: {
    film:{
      type: Object,
      required: true
    } 
  },

  setup(props) {
    const store = useStore()

    const id = props.film.id
    const isFollowed = computed( () => store.getters['isFollowedMovie'](id))
    const followText = computed( () => isFollowed.value ? 'Dejar' : 'Seguir')
    const posterPath = `https://image.tmdb.org/t/p/w500/${props.film.poster_path}`
    const title = props.film.title
    const voteAverage = props.film.vote_average

    const follow = () => {
      if (!isFollowed.value) {
        store.commit('followMovie', id)
      }
      else {
        store.commit('unfollowMovie', id)
      }
    }

    return {
      followText,
      isFollowed,
      posterPath,
      title,
      voteAverage,

      follow
    }
  },
}
</script>


<style lang="scss" scoped>
  .main-container {
    margin-right: 2rem;

    img {
      width: 15rem;
      border-radius: 5px;
    }

    .ratings {
      display: flex!important;
      justify-content: space-evenly;
      align-items: flex-end;      
      margin-top: 1.25rem;
      
      span {
        width: 100%;
        padding: 3px 5px;
        text-align: center;
      }

      .voteAverage {
        background-color: #417a9b;
        margin-right: 0.2rem;
      }

      .personalFollow {
        color: black;
        margin-left: 0.2rem;
      }

      .follow-style {
        background-color: #FFC82C;
      }

      .unfollow-style {
        background-color: red;
      }
    }
  }
</style>