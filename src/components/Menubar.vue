<template>
  <div class="menubar">
      
        <div class="main">
            <a>
                <img src="../assets/Buoyline_logo.png"/>
            </a>
        </div>
        <div class="desktopmenu" v-show="!res">
            <div class="menuitems">
                <ul>
                    <li v-for="(item, i) in menuitems" :key="i">
                        <a :href="item.link">{{item.title}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div v-show="res" class="mobilemenu">
            <div class="mobilemenuitems">
                <p>=</p>
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
          menuitems: [
              {
                  link: "#flyer",
                  title: "Flyer"
              },
              {
                  link: "#services",
                  title: "Services"
              }
          ]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menubar {
    position: fixed;
    z-index: 10;
    top: 0;
    width: calc(100% - 60px);
    background: white;
    height: 80px;
    text-align: left;
    padding: 0 30px;
    -webkit-box-shadow: 0px 7px 18px 5px rgba(0,0,0,0.19); 
    box-shadow: 0px 7px 18px 5px rgba(0,0,0,0.19);
}

.main {
    height: 60px;
    margin-top: 10px;
    margin-left: 20px;
    float: left;
}
img {
    height: 100%;
}
.menuitems li {
    list-style: none;
    display: inline-block;
    padding: 20px;

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
</style>
