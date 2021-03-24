<template>
  <div class="homepage">
  <transition v-for="(item, i) in $homepage" :key="i" :is="item.slice_type" :data="item" class="section">
    </transition>
  </div>
</template>

<script>
import slider from "./components/Slider";
import services from "./components/Services";
import imageandtext from "./components/ImageAndText";
import imagecarousel from "./components/ImageCarousel";
import locationmap from "./components/Map";


export default {
  name: 'HomePage',
  components: {
    slider,
    services,
    imageandtext,
    imagecarousel,
    locationmap
  },
  data() {
    return {
      homebanner: null,
      services: null,
      imageandtext: null,
      imagecarousel: null
    }
  },
  methods: {
    assignData() {
      this.homebanner = this.$homepage.filter(i => i.slice_type === "slider")[0];
      this.services = this.$homepage.filter(i => i.slice_type === "services")[0];
      this.imageandtext = this.$homepage.filter(i => i.slice_type === "imageandtext")[0];
      this.imagecarousel = this.$homepage.filter(i => i.slice_type === "imagecarousel")[0];
      console.log(this.$homepage);
    }
  },
  props: {
    msg: String
  },
  mounted() {
    this.assignData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
