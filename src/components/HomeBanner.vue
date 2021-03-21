<template>
  <div class="homebanner">
      <div class="slider">    
        <transition :name="`${handlePos(i)}-${dir}`" appear v-for="(item, i) in data.items" :key="i">
            <div :class="`slide ${handlePos(i)}`" :key="`${handlePos(i)} ${dir}`">
                <div class="banner" :style="`background-image: url(${item.image.url})`">
                    <div class="text">
                        <h1 v-if="item.title"><p v-if="item.pretitle">{{$text(item.pretitle)}}</p> {{$text(item.title)}}</h1>
                    </div>
                    <div class="overlay"/>
                </div>
            </div>
        </transition>
    </div>
     <div class="pagination">
            <div v-for="(item, i) in data.items" :key="i">
                <div :class="`dot ${active === i ? `active` : ``}`" @click="handleSlide(i)"></div>
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
     transitioning() {
         setInterval(() => {
            this.prev = this.count;
             this.count += 1;
             this.handleSlide(this.count % this.data.items.length);
         }, this.data.primary.speed ? this.data.primary.speed * 1000 : 5000);
     },
     handleSlide(i) {
         if (i === this.active || performance.now() < (this.timeSinceSlide + 1000)) return;
         this.timeSinceSlide = performance.now();
         if (i > this.active) {
             this.dir = `left`;
         } else {
             this.dir = `right`;
         }
         if (i !== this.active) {
            this.prev = this.active;
            this.active = i;
            // console.log("Previous: ", this.prev, "Active: ", this.active, "Direction: ", this.dir);
         }
         
     },
     handlePos(i) {
         switch (i) {
             case this.active: {
                 return "active";
             }
             case this.prev: {
                 return "prev";
             }
             default: {
                 return ""
             }
         }
     }
  },
  data() {
      return {
        active: 0,
        count: 0,
        dir: `left`,
        prev: this.data.items.length - 1,
        timeSinceSlide: 0
      }
  },
  mounted() {
      this.transitioning();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
.pagination .active {
    background-color: lightblue;
}

//----------------------------------

.slide:not(.active) {
    transform: translateX(-100%);
}

.active {
    transform: translateX(0%);
    transition: transform 1.5s ease;
}

//LEFT
//when active slides left and leaves
.active-left-leave-to {
    transform: translateX(-100%);
    transition: transform 1.5s ease;
}

//when the new expected left comes in (left)
.active-left-enter-active {
    transform: translateX(100%);
    transition: transform 1.5s ease;
}

.active-left-enter-to {
    transform: translateX(0%);
    transition: transform 1.5s ease;
}

//when the prev (former active) leaves, left 
.prev-left-enter {
    transform: translateX(0%) !important;
    transition: transform 1.5s ease;
}
.prev-left-enter-to {
    transform: translateX(-100%) ;
    transition: transform 1.5s ease;
}

.prev-right-leave-to {
    transform: translateX(100%);
    transition: transform 1.5s ease;
}
.active-right-enter-to {
    transform: translateX(0%);
    transition: transform 1.5s ease;
}

.active-right-enter {
    transform: translateX(-100%);
    transition: transform 1.5s ease;
}



</style>