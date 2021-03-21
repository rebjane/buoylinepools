<template>
  <div class="homepage">
   <HomeBanner :data="homebanner" v-if="homebanner"/>
   <Services :data="services" v-if="services"/>
  </div>
</template>

<script>
import HomeBanner from "./components/HomeBanner";
import Services from "./components/Services";

export default {
  name: 'HomePage',
  components: {
    HomeBanner,
    Services
  },
  data() {
    return {
      homebanner: null,
      services: null
    }
  },
  methods: {
    assignData() {
      this.homebanner = this.$homepage.filter(i => i.slice_type === "slider")[0];
      this.services = this.$homepage.filter(i => i.slice_type === "services")[0];

      // console.log(this.$homepage);
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
