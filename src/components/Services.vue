<template>
  <div id="services">
      <div class="main">
             <h2>SERVICES</h2>
             <p>Buoyline Pools offers a wide scope of pool and spa services in the Greater Toronto Area.</p>
                <div class="servicecards">
                    <div class="card">
                        sada
                        </div>
                        <div class="card">
                        sada
                        </div>
                        <div class="card">
                        sada
                        </div>
                        <div class="card">
                        sada
                        </div>
                        <div class="card">
                        sada
                        </div>
                        <div class="card">
                        sada
                        </div>
                        <div class="card">
                        sada
                        </div>
                </div>
          </div>
     <Whitewave class="wave"/>
  </div>
</template>

<script>
import Whitewave from "./Whitewave";

export default {
    
  name: 'Services',
  components: {
    Whitewave,
  },
  props: {

  },
  data() {
      return {
      }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#services {
    color: black;
}
.main {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    width: 100%;
}
.card {
    background: lightblue;
    display: inline-block;
    margin: 10px;
    padding: 20px;
}
</style>
