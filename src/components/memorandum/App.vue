<template>
    <div class="father">
      <Header />
      <Body />
      <Footer/>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components:{
    Header,
    Body,
    Footer
  }
}
</script>

<style>
*{
    margin: 0px;
    padding: 0px;
}
img{
    user-select: none;
    cursor: default;
    pointer-events: none;
}
.father{
    display:flex;
    flex-direction:column;
    justify-items: flex-start;
    align-items: center;
    width:300px;
}
</style>
