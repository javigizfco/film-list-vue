<template>
  <header>
    <div @click='backHome' class="logo">
      <img height=30 width=30 src='../../src/assets/logo.png' alt='logo_vue' />
      <span class='title'>My Film List</span>
    </div>
    <div class='searchbar'>
      <SearchBar  />
    </div>
  </header>
</template>


<script>
import { useRouter } from 'vue-router'
import SearchBar from './SearchBar'

export default {
  name: 'HeaderBar',

  components: {
    SearchBar
  },

  setup() {
    const router = useRouter()
    const backHome = () => {
      router.push({name: 'home'})
    }

    return {
      backHome
    }
  },
}
</script>

<style lang="scss" scoped>
  header {
    display: flex!important;
    justify-content: space-between ;
    width: 100%;
    padding-bottom: 0.5rem;
    border-bottom: thin solid  #2c3e50 ;
    
    .logo {
      cursor: pointer;
    }

    img {
      vertical-align: middle
    }

    .title {
      font-size: 2.25rem;
      padding: 0.5rem;
    }

    .searchbar {
      display: inline;
    }
  }
</style>