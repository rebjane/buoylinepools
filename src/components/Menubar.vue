<template>
  <div class="menubar">
      
        <div class="main">
            <a>
                <img src="../assets/Buoyline_logo.png"/>
            </a>
        </div>
        <div class="desktopmenu">
            <div class="menuitems">
                <ul>
                    <li v-for="(item, i) in $menubar" :key="i">
                        <a :href="$text(item.link)">{{$text(item.title)}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mobilemenu">
            <div class="mobilemenuitems">
                <p @click="handleMobileNav">☰</p>
            </div>
            <div class="mobiledropdown" v-if="navOpen">
                <ul class="dropdown">
                    <li v-for="(item, i) in $menubar" :key="i">
                        <a :href="$text(item.link)" @click="handleMobileNav">{{$text(item.title)}}</a>
                    </li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Menubar',
  props: {
    res: Boolean
  },
  data() {
      return {
          navOpen: false
      }
  },
  methods: {
      handleMobileNav() {
          this.navOpen = !this.navOpen;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.menubar {
    position: fixed;
    z-index: 10;
    top: 0;
    width: calc(100% - 60px);
    background: white;
    text-align: left;
    padding: 0 30px;
    z-index: 12;
    -webkit-box-shadow: 0px 7px 18px 5px rgba(0,0,0,0.19); 
    box-shadow: 0px 7px 18px 5px rgba(0,0,0,0.19);
}

.mobilemenuitems, .menubar {
    height: 80px;
    p {
        margin: auto;
        font-size: 30px;
        cursor: pointer;
    }
}
.mobilemenuitems {
    display: flex;
}

.main {
    height: 60px;
    width: 25%;
    margin-top: 10px;
    float: left;
}
img {
    height: 100%;
}
.menuitems li {
    list-style: none;
    display: inline-block;
    padding: 20px;
    &:last-child {
        padding-right: 0;
    }

}
.menuitems ul {
    display: inline-block;
}
a {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
}
.menuitems {
    float: right;
    top: 0
}
.mobilemenuitems {
    top: 0;
    float: right;
    color: black;
    top: 0;
}
.dropdown {
    position: absolute;
    top: 100%;
    margin-top: 0;
    padding-top: 20px;
    text-align: center;
    padding: 0;
    width: calc(100% + 30px);
    left: -30px;
    background: white;
  -webkit-box-shadow: 0px 12px 18px 0px rgba(0,0,0,0.25); 
box-shadow: 0px 12px 18px 0px rgba(0,0,0,0.25);
    ul {
        list-style: none;
        width: 100%;
    }
    li {
        padding: 10px 0;
        list-style: none;
    }
}
@media screen and (max-width: 1000px) {
    img {
        height: 50px;
    }
    .main {
        margin-top: 15px;
    }
    .desktopmenu {
        display: none;
    }
}
@media screen and (min-width: 1001px) {
    .mobilemenu {
        display: none;
    }
}
</style>
