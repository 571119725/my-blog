<template>
  <svg class="icon" aria-hidden="true" :style="'font-size: ' + fontSize">
    <use :xlink:href="href"></use>
  </svg>
</template>


<script>
export default {
  beforeMount(){
    const oScript = document.createElement('script');
    oScript.type = 'text/javascript';
    oScript.src = '//at.alicdn.com/t/font_2975884_43yttad3eoj.js';
    document.body.appendChild(oScript);
  },
  props: ["href", "fontSize"]
}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
