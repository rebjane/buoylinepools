<template>
  <div id="footer">
      <!-- <Wave :fill="`lightblue`" class="wave"/> -->

      <div class="column" id="contact">
        <iframe class="map" :src="$text(data.primary.map_link)" frameborder="0" style="border:0" allowfullscreen=""></iframe>
       </div>
    <ul class="column info">
        <li class="logo">
            <a >
                <img class="buoyline" src="../assets/Buoyline_logo.png"/>
            </a>
        </li>
        <span class="desktop">
            <transition v-for="(item, j) in data.primary.columns" :key="j">
                <div class="minicolumn">
                    <transition v-for="(item, i) in Math.floor(data.items.length / data.primary.columns)" :key="i">
                        <li class="footeritem">
                            
                            <img class="icon" :src="data.items[Math.floor(i + (data.items.length / data.primary.columns * j))].point_icon.url"/>
                            <div class="text" v-html="$html(data.items[Math.floor(i + (data.items.length / data.primary.columns * j))].text_point)"/>
                        </li>
                    </transition>
                </div>
            </transition>
        </span>
        <span  class="mobile">
             <div class="mobilecolumn">
                    <transition v-for="(item, i) in data.items" :key="i">
                        <li class="footeritem">
                            <img class="icon" :src="item.point_icon.url"/>
                            <div class="text" v-html="$html(item.text_point)"/>
                        </li>
                    </transition>
                </div>
        </span>

    </ul>
    <div class="copyright">
        <p>Copyright {{year}} Buoyline Pools and All Services Limited. Designed and developed by <a target="_blank" href="http://www.rebj.design">The Reb</a></p>
        </div>
  </div>
</template>
<script>
// import Wave from "./Wave";

export default {
  name: 'Slider',
  props: {
    data: Object,
    res: Boolean,
  },
  components: {
    // Wave
  },
  watch: {

  },
  methods: {

  },
  data() {
      return {
            year: null
      }
  },
  mounted() {
      this.year = new Date().toString().split(" ")[3];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
    list-style: none;
    margin: 0;
}
.icon {
    width: 40px;
    display: inline-block;
    vertical-align: middle;

}
.text {
    display: inline-block;
    margin: 0;
    vertical-align: middle;
    margin-left: 20px;
    font-weight: 300;
    width: calc(100% - 60px);
    word-wrap: break-word;
}
#footer {
    text-align: left;
    padding: 40px 0 0;
    // background: lightblue;
    -webkit-box-shadow: 0px 7px 18px 5px rgba(0,0,0,0.19); 
    box-shadow: 0px 7px 18px 5px rgba(0,0,0,0.19);
    position: relative;
}

.map {
    width: 100%;
    height: 300px;
}
@media screen and (max-width: 1001px) {
    .column {
        width: 100%;
    }
    .info {
        margin-top: 20px;
    }
}
.wave {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
    transform: translateY(-25%);
    z-index: -1;
}
.logo {
    width: 100%;
    margin-bottom: 20px;
}
.buoyline {
    width: 35%;
}
@media screen and (min-width: 1001px) {
    .mobile {
        display: none;
    }
    .column {
        margin-bottom: 20px;
        display: inline-block;
        width: 45%;
        vertical-align: middle;
        &:last-child {
            padding-left: 5%;
        }
    }
}
@media screen and (max-width: 1000px) {
    .desktop {
        display: none;
    }
    .text {
        width: auto;
    }
    .buoyline {
        width: 50%;
    }
    .logo {
        margin: auto;
    }
    .column:last-child {
        padding: 0;
        padding-left: 20px;
    }
}
.minicolumn {
    display: inline-block;
    width: calc(50% - 20px);
    margin: 0 10px;
}
.copyright {
    font-size: 12px;
    text-align: center;
    padding: 10px 0px;
    background: lightblue;
}
</style>