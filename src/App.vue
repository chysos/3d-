<template>
  <div id="app">
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <charts></charts>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import charts from './components/charts.vue'
export default {
  name: 'App',
  components: {
    charts,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
