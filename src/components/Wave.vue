<template>
  <div class="wave">
    <div class="wave" ref="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 585.06 147.92">
            <path :style="`fill: ${fill}`" class="cls-1" d="M585.06,30.14C522.2,3.07,373.92-16.64,246.47,20.28S0,30.93,0,30.93v86.86c62.86,27.06,211.14,46.78,338.58,9.85S585.06,117,585.06,117Z"/>
        </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wave',
  data() {
      return {
      }
  },
  props: {
      fill: String,
  },
  methods: {

  },
  mounted() {

    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cls-1 {
    fill:#fff;
    fill-rule:evenodd;
    
}
.wave {
    position: relative;
    pointer-events: none;
}
svg {
  width: 100vw;
  height: 100% !important;
}
</style>
