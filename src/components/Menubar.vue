<template>
  <div class="menubar">
      <div class="main">
        <a>
            <img src="../assets/Buoyline_logo.png"/>
        </a>
    </div>
    <div class="menuitems">
        <ul>
            <li v-for="(item, i) in menuitems" :key="i">
                <a :href="item.link">{{item.title}}</a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menubar',
  data() {
      return {
          menuitems: [
              {
                  link: "",
                  title: "About"
              },
              {
                  link: "",
                  title: "Contact"
              },
              {
                  link: "",
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
}

.main {
    height: 60px;
    margin-top: 10px;
    margin-left: 20px;
    display: inline-block;
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
</style>
