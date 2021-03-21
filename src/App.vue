<template>
  <div id="app">
    <Menubar/>
    <HomePage/>
  </div>
</template>

<script>
import HomePage from './HomePage.vue'
import Menubar from './components/Menubar.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    Menubar
  }
}
</script>

<style>
#app {
  font-family:  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background: lightblue; */
  height: 200vh;
}
body {
  margin: 0;
}
h2 {
  font-size: 40px;
}
</style>
