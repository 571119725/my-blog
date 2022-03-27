<template>
  <div id="app">
    <div class="blogHead" :style="{'background': (ifVisible ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0)')}">
      <blog-header :style="{'visibility': (ifVisible ? 'visible' : 'hidden')}"></blog-header>
      <div class='hideContentBtn' @click="changeVisibility">
        <img :src="ifVisible ? require('./assets/app/xiaoshi.png') : require('./assets/app/xianshi.png')" alt='hidecontent'>
      </div>
    </div>
    <div :class="ifVisible ? 'showContent' : 'hideContent'">
      <Leftpart></Leftpart>
      <router-view ></router-view>
      <Rightpart></Rightpart>
    </div>
  </div>
</template>

<script>
import AddBlog from './view/addblog/AddBlog'
import ShowBlogs from './view/showblogs/ShowBlogs'
import SingleBlog from './view/singleblog/SingleBlog'
import HomePage from './view/homepage/HomePage'
import Leftpart from './layout/leftpart/Leftpart'
import Rightpart from './layout/rightpart/Rightpart'
import BlogHeader from './layout/blogheader/BlogHeader'
export default {
  name: 'App',
  components: {
    AddBlog,
    ShowBlogs,
    BlogHeader,
    SingleBlog,
    HomePage,
    Leftpart,
    Rightpart
  },
  data(){
    return{
      ifVisible:Boolean,
    }
  },
  methods:{
    changeVisibility (){
      this.ifVisible=!this.ifVisible;
    },
  },
  created () {
    this.ifVisible=true;
  },

} 
</script>

<style>
*{
  margin: 0px;
  padding:0px;
  border:0px;
  user-select: none;
}
img{
  -webkit-user-drag:none;
}
html {
  overflow-y: overlay;
}
#app{
  min-width:1200px;
  position: relative;
}
.blogHead{
  display:flex;
  justify-content: space-between;
  background: rgba(255,255,255,0.8);
  transition: background 1s;
}
.hideContentBtn img{
  width:30px;
  height:30px;
}
.hideContentBtn{
  position:absolute;
  width:30px;
  height:30px;
  right:50px;
  top:30px;
}
.showContent{
  display:flex;
  margin-top:40px;
  justify-content: center;
  transition: all 1s;
  opacity: 1;
}
.hideContent{
  opacity: 0;
}
body{
  background-image:url('./assets/app/background.png');
  background-repeat:no-repeat;
  background-size: cover;
  background-attachment: fixed;
  color:black;
}
</style>
