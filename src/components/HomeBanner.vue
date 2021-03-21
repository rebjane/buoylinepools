<template>
  <div class="homebanner">
      <div class="slider">
        <div :class="`slide ${pos(i)}`" v-for="(item, i) in data.items" :key="i">
            <div class="overlay"/>
            <div class="banner" :style="`background-image: url(${src})`">
                <div class="text">
                    <h1 v-if="item.title"><p v-if="item.pretitle">{{$text(item.pretitle)}}</p> {{$text(item.title)}}</h1>
                </div>
            </div>
        </div>
        <div class="pagination">
            <div v-for="(item, i) in data.items" :key="i">
                <div class="dot" @click="handlePag(i)"></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
  props: {
    data: Object
  },
  watch: {

  },
  methods: {
      pos(num) {
          if (this.curr === num) {
              return "current"
          } else {
              return "nocurrent"
          }
      },
      handlePag(num) {
          this.prev = this.curr;
          this.curr = num;
          this.pos(num);
      }
  },
  data() {
      return {
         src: 'http://buoylinepools.ca/images/content_right_home1.png',
         ww: window.innerWidth,
         curr: 0,
         prev: null
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.overlay {
    background: rgb(34,38,108);
    background: linear-gradient(90deg, rgba(34,38,108,0.7469362745098039) 39%, rgba(34,38,108,0) 100%);
    height: 100%;
    width:100%;
    position: absolute;
    z-index: 0;
}
.banner {
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
}
.homebanner {
    width: 100vw;
    height: 100vh;
}
img {
    width: 100vw;
    height: 100vh;
    opacity: 0;
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
    position: absolute;
    right: 20px;
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
}
.dot {
  height: 20px;
  width: 20px;
  background-color: white;
  border-radius: 50%;
  margin: 10px;
}
.nocurrent {
    right: 100vw;
}
</style>
