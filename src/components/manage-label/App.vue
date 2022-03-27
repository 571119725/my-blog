<template>
    <div class="father">
      <Body />
    </div>
</template>

<script>
import Body from './components/Body.vue'
export default {
  name: 'App',
  components:{
    Body
  }
}
</script>

<style>
*{
    margin: 0px;
    padding: 0px;
}
input{
  text-indent:10px;
}
img{
    user-select: none;
    cursor: default;
    pointer-events: none;
}
.father{
    display:flex;
    justify-content: flex-start;
    width:300px;
}
</style>
