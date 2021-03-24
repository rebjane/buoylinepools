<template>
  <div id="map">
      <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.580818107939!2d-79.39880758449677!3d43.82305357911571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2ca483980f1f%3A0x51727574f3cb059a!2s60+Green+Ln+%233%2C+Thornhill%2C+ON+L3T+7P5!5e0!3m2!1sen!2sca!4v1522623959987" width="600" height="250" frameborder="0" style="border:0" allowfullscreen=""></iframe>
  </div>
</template>

<script>
export default {
    
  name: 'Map',
  components: {
  },
   props: {
    data: Object
  },
  data() {
      return {
      }
  },
  methods: {
  },
  mounted() {
// console.log(this.data.items)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#map {
    padding: 100px 0;
}
.map {
    max-width: 600px;
    height: 50vh;

}
</style>
