<template>
  <div class="carousel">
      <h2 v-if="data.primary.title.length">{{$text(data.primary.title)}}</h2>
      <div class="slider" :style="`transform: translateX(-${active * (!res ? 50 : 75)}%)`">    
        <transition appear v-for="(item, i) in data.items" :key="i">
            <div class="slide">
                <div class="banner" :style="`background-image: url(${item.image.url}); transform: translateX(${i * 100}%)`">
                </div>
            </div>
        </transition>
    </div>
    <div class="pagination">
        <div class="dot-outer" v-for="(item, i) in data.items" :key="i">
            <div :class="`dot ${active === i ? `active` : ``}`" @click="active = i"></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCarousel',
  props: {
    data: Object,
    res: Boolean
  },
  watch: {

  },
  methods: {
     transitioning() {
         setInterval(() => {
             this.count += 1;
             this.active = (this.count % (this.data.items.length));
         }, 5000);
     }
  },
  data() {
      return {
        active: 0,
        count: 0
      }
  },
  mounted() {
      this.transitioning();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.banner {
    width: 100%;
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    
}

.carousel {
    width: 100vw;
    height: 100%;
    padding: 100px 0;
    position: relative;
}
.text {
    position: absolute;
    bottom: 20%;
    z-index: 5;
    color: white;
    margin-left: 30px;
    text-align: left;
    
}
h1 {
    font-size: 50px;
}
p {
    font-size: 24px;
    margin: 0;
    margin-bottom: 10px;
}
.slide {
    position: absolute;
    
}
.pagination {
    /* position: absolute; */
    padding-top: 20px;
    .dot-outer {
        display: inline-block;
    }
}
.dot {
  height: 15px;
  width: 15px;
  background-color: black;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
}

.slide { 
    width: 50%;
    left: 25%;
}
.active {
    background-color: lightblue;
}

.slider {
    height: 400px;
    transition: transform 1s ease;
}
@media screen and (max-width: 600px) {
    .banner {
        height: 300px;
    }
    .slide {
        width: 75%;
        left: 13.5%;
    }
}
</style>