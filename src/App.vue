<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from './pages/Index/Index.vue'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.btn-primary{
  background:#1378c1 !important;
  border-color:#1378c1 !important;
}
.btn-primary-outline{
  color:#1378c1 !important;
  border-color:#1378c1 !important;
}
</style>
