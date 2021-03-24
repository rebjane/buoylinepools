<template>
  <div id="app">
    <Menubar :res="ismobile"/>
    <div class="page">
      <HomePage/>
    </div>
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
  },
  data() {
    return {
      ismobile: window.innerWidth < 601
    }
  },
  mounted() {
    this.ismobile = window.innerWidth < 601;
   
    window.addEventListener("resize", () => {
      this.ismobile = window.innerWidth < 601;
    console.log(this.ismobile);
})
  }
}
</script>

<style lang="scss">
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
  width: 100%;
  overflow-x: hidden;
}
h2 {
  font-size: 40px;
}

@media screen and (max-width: 600px) {
  .imageandtext {
    .image, .text {
      width: 100%;
      text-align: center;
    }
  }
}

</style>
