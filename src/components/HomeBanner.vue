<template>
  <div class="homebanner">
      <div class="slider">    
        <transition appear v-for="(item, i) in data.items" :key="i">
            <div class="slide" :style="`transform: translateX(-${active * 100}vw)`">
                <div class="banner" :style="`background-image: url(${item.image.url}); transform: translateX(${i * 100}vw)`">
                    <div class="text">
                        <h1 v-if="item.title"><p v-if="item.pretitle">{{$text(item.pretitle)}}</p> {{$text(item.title)}}</h1>
                    </div>
                    <div class="overlay"/>
                </div>
            </div>
        </transition>
        <div class="pagination">
            <div v-for="(item, i) in data.items" :key="i">
                <div :class="`dot ${active === i ? `active` : ``}`" @click="active = i"></div>
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
     
  },
  data() {
      return {
        active: 0
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.overlay {
    background: rgb(17, 19, 53);
    background: linear-gradient(90deg, rgba(17, 19, 53,0.7469362745098039) 39%, rgba(17, 19, 53,0) 100%);
    height: 100%;
    width:100%;
    position: absolute;
    z-index: 1;
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
  cursor: pointer;
}

.slide {
    transition: transform 1s ease;
}
.active {
    background-color: lightblue;
}
</style>
