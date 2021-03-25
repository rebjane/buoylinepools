<template>
  <div id="services">
      <div class="text">
            <h2 class="title" >SERVICES</h2>
             <p class="subtitle">Buoyline Pools offers a wide scope of pool and spa services in the Greater Toronto Area.</p>
        </div>
        <div class="main">
                <div class="servicecards">
                    <div class="cards">
                        <div v-for="(item, i) in data.items" class="card" @mouseleave="info = null" @mouseover="displayText($event, i, $text(item.displaytext))" @mousedown="displayText($event, i, $text(item.displaytext))" :key="i">
                            <img :src="item.image.url"/>
                            <div class="label">
                                <h4> {{$text(item.label)}}</h4>
                                <div class="mobile">
                                    <transition appear name="info" v-if="res && i === active">
                                        <div :key="info" :class="`info ${info ? `show` : ''}`" ref="info">
                                            <p v-show="info">{{info}}</p>
                                        </div>
                                    </transition>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <transition appear name="info" v-if="!res">
                        <div :key="info" :class="`info ${info ? `show` : ''}`" ref="info">
                            <p v-show="info">{{info}}</p>
                        </div>
                </transition>

          </div>
        <Wave class="whitewave"/>
        
     <!-- <div class="bottom">
         <div class="blue"/>
         <Wave class="bluewave" :fill="`#2270B1`"/>
        </div> -->
  </div>
</template>

<script>
import Wave from "./Wave";

export default {
    
  name: 'Services',
  components: {
    Wave,
  },
   props: {
    data: Object,
    res: Boolean
  },
  data() {
      return {
          info: null,
          active: null
      }
  },
  methods: {
      displayText(e, i, text) {
        //   if (this.info) return;
        if (this.res && e.type === "mouseover") return;
          this.info = text;
          this.active = i;
      }
  },
  mounted() {
// console.log(this.data.items)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#services {
    position: relative;
    height: 100%;
    width: 100%;
    margin-bottom: 100px;
}

.main {
    width: 100%;
     z-index: 2;
     position: relative;
}
.text {
    position: relative;
    z-index: 1;
}
.card {
    background: lightblue;
    display: inline-block;
    margin: 10px auto;
    padding: 20px;
    width: 100px;
    border-radius: 20px;
    transform: scale(1);
    transition: transform .5s ease;
    -webkit-box-shadow: 0px 7px 18px 5px rgba(0,0,0,0.19); 
    box-shadow: 0px 7px 18px 5px rgba(0,0,0,0.19);
    cursor: pointer;
    @media screen and (min-width: 601px) {
        &:hover {
            transform: scale(1.1);
            transition: transform .5s ease;
        }
    }
    img {
        width: 100px;
        height: 100px;
    }
    
}

@media screen and (max-width: 600px) {
    .card {
        width: calc(100% - 80px);
        img {
            width: 60px;
            height: 60px;
        }
    }
    // img, .label {
    //     display: inline-block;
    //     vertical-align: middle;
    // }
   
}

.cards {
    display: flex;
    flex-wrap: wrap;
    max-width: 1100px;
    margin: auto;
}

.label {
    h4 {
        margin-bottom: 0;
        display: inline-block;
        vertical-align: center;
    }
}
h2 {
    margin-top: 0;
}


.whitewave {
    z-index: 0;
    position: absolute;
    width: 100%;
    top: 0;
    transform: translateY(-35%);
}

.bluewave {
    transform: scaleX(-1) translateY(-50%);
    z-index: -1;
    width: 100%;
    position: absolute;
}
.subtitle {
    margin-bottom: 50px;
}
.title {
    margin-bottom: 10px;
}
.top, .bottom {
    position: relative;
    overflow: visible;
}

.blue {
    background: #2270B1;
    height: 200px;
    position: absolute;
    bottom: 0;
    width: 100%;
    transform: translateY(100%);
    z-index: -1;
}


@media screen and (min-width: 601px) {
    .info {
        
        height: 0px;
        transition: opacity .5s ease;
        p {
            position: absolute;
            font-size: 20px;
            // height: 0;
            border-radius: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 20px;
            background: lightblue;
            width: 40%;
            transition: opacity 1s ease;
        }
    }
}

.info-enter p, .info-leave-to p{
    opacity: 0;
    transition: opacity 1s ease;
}
.info-enter-to p {
    opacity: 1;
    transition: opacity 1s ease;
}
.mobile {
    .info {
        transition: opacity .5s ease;
        p {
            transition: opacity 1s ease;
        }
    }
    z-index: 10;
}

</style>
