<template>
  <input v-model="text" @keydown.enter="onSubmit" placeholder="título de película">
  <button @click="onSubmit">Buscar</button>
</template>


<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'SearchBar',
  
  setup() {
    const router = useRouter()
    const text = ref('')

    const onSubmit = () => {
      router.push({ name: 'search', params: { searchText: text.value }})
    }

    return {
      text,

      onSubmit
    }
  },
}
</script>


<style scoped>

</style>