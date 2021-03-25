<template>
  <div class="imageandtext" :style="data.primary.direction ? `background: #2270B1;` : ``" :id="data.primary.id.length ? $text(data.primary.id) : null">
      <transition v-for="(item, i) in data.items"  :key="i">
          <div class="section imageleft" v-if="data.items && !data.primary.direction">
            <div class="image">
                <Wave :fill="`#2270B1`" class="wave top"/>
                      <Wave :fill="`#2270B1`" class="wave bottom"/>
                    <img :src="item.image.url"/>
                </div>

                <div class="text" ref="text">
                      <Wave :fill="`#2270B1`" class="wave top"/>
                      <Wave :fill="`#2270B1`" class="wave bottom"/>
                    <h2>{{$text(item.title)}}</h2>
                    <p>{{$text(item.text)}}</p>
                    <div class="cta" v-if="item.button_text.length && item.button_link.url">
                        <a :href="item.button_link.url">{{$text(item.button_text)}}</a>
                    </div>
                </div>
             </div>
             <div class="section imageright" v-else-if="data.items">
                <div class="text" ref="text">
                    <!-- <Wave :fill="`#2270B1`" class="wave top"/>
                      <Wave :fill="`#2270B1`" class="wave bottom"/> -->
                    <h2>{{$text(item.title)}}</h2>
                    <p>{{$text(item.text)}}</p>
                    <div class="cta" v-if="item.button_text.length && item.button_link.url">
                        <a :href="item.button_link.url" :target="`${item.new_tab ? `_blank` : `_self`}`">{{$text(item.button_text)}}</a>
                    </div>
                </div>
                 <div class="image">
                    <img :src="item.image.url"/>
                </div>
             </div>
        </transition>
  </div>
</template>

<script>
import Wave from "./Wave";
export default {
  name: 'ImageAndText',
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
.imageandtext {
    text-align: left;
    padding: 20px 0;
    color: white;
    position: relative;

}
a {
    text-decoration: none;
    color: #2270B1;
}
.imageright {
    h2, p {
        margin-left: 100px;
    }
    .cta {
        margin-left: 100px;
    }
    .image {
       width: 45%; 
    }
}
.cta {
    z-index: 3;
    margin-top: 40px;
    padding: 10px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    font-weight: bold;
    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: lightblue;
        border-radius: 10px;
        z-index: -1;
    }
}
h2 {
    margin: 0;

}
p {
    margin-bottom: 0;
}
h2, p, .cta {
    margin-left: 5%;
    margin-right: 5%;

}
img {
    /* opacity: 0; */
    width: 100%;
}

.image {
    display: inline-block;
    width: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    vertical-align: middle;
    overflow: visible;
}

.text {
    width: 50%;
    display: inline-block;
    vertical-align: middle;
    position: relative;

}
.text:after {
    content: '';
    background-color: #2270B1;
    position: absolute;
    height: 100%;
    width: 200vw;
    left: 0;
    top: 50%;
    z-index: -2;
    left: -50vw;
    padding: 40px 0;
    transform: translateY(-50%);
}

.top {
    top: 0;
    transform: translateY(-50%);
}
.bottom {
    bottom: 0;
    transform: translateY(50%);
}

.wave {
    position: absolute;
    z-index: -1;
    width: 100%;
    @media screen and (min-width: 601px) {
        left: -100%;
    }
}
.imageright {
    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column-reverse;
        .image {
            width: 100%;
            margin-bottom: 40px;
        }
        .cta {
            margin-left: 0;
            margin-right: 0;

        }
        h2, p {
            margin: 0 5%;
        }
        .wave {
            position: absolute;
            z-index: -1;
            width: 100%;
            // @media screen and (min-width: 601px) {
            //     left: 0;
            // }
        }
    }
}

.section {
    @media screen and (max-width: 600px) {
        &:after {
            content: '';
        background-color: #2270B1;
        position: absolute;
        height: 100%;
        width: 200vw;
        left: 0;
        top: 50%;
        z-index: -2;
        left: -50vw;
        padding: 40px 0;
        transform: translateY(-50%);
        }
    }
}
</style>
