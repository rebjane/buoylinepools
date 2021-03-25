<template>
  <div id="app">
    <Menubar :res="ismobile"/>
    <div class="page">
      <HomePage :res="ismobile"/>
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
 overflow-y: visible;
  
}
body {
  margin: 0;
}
html {
  overscroll-behavior: none;
  scroll-behavior: smooth;

}
.page {
  width: 100vw;
  overflow-x: hidden;
}
h2 {
  font-size: 40px;
}

@media screen and (max-width: 1000px) {
  h2 {
    font-size: 30px;
  }
}

@media screen and (max-width: 600px) {

  h2 {
    font-size: 25px;
  }
  .imageandtext {
    .image, .text {
      width: 100%;
      text-align: center;
    }
  }
}
p {
  line-height: 1.5;
}

</style>
