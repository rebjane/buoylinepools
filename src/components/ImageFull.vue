<template>
  <div id="imagefull" >
    <div class="overlay" v-if="data.primary.bg_image.url"/>
    <div class="bg" v-if="data.primary.bg_image.url " :style="`background-image: url(${data.primary.bg_image.url})`"/>
      <h2 v-if="data.primary.title.length" class="title" :style="`color: ${data.primary.bg_image.url ? `white` : ``}`"><span>{{$text(data.primary.title)}}</span></h2>
      <img class="image" :src="data.primary.image.url"/>
      <Wave :fill="`${data.primary.bg_image.url ? `lightblue` : `#2270B1`}`" class="wave"/>
  </div>
</template>

<script>
import Wave from "./Wave";

export default {
  name: 'ImageFull',
  components: {
    Wave
  },
  data() {
      return {
      }
  },
  props: {
      data: Object
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#imagefull {
  padding: 5% 0;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.image {
  width: 60%;
}
@media screen and (max-width: 1000px) {
  .image {
    width: 100%;
  }
}
.wave {
  position: absolute;
  transform: translateY(-50%);
  bottom: 0;
  z-index: -1;
}
.title {
  margin: 0;
  text-transform: uppercase;
}
.overlay {
  background: black;
  z-index:-1;
  opacity: .25;
}

.bg {
    z-index: -2;
}

.overlay, .bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
