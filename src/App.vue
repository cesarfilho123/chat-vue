<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
.section-center-bg{
  background:#d5e9f1;
  height: 100vh;
  display: flex;
  align-items: center;
}
</style>
