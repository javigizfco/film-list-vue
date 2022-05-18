<template>
  <HeaderBar />
  <div class="container">
    <router-view />
  </div>
</template>


<script>
import HeaderBar from '../components/HeaderBar'

export default {
  name: 'MainLayout',

  components: {
    HeaderBar,
  },
  
  setup() {
    
  },
}
</script>


<style lang="scss" scoped>
  .container {
    padding: 2rem
  }
</style>