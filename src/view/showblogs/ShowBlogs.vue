<template>
  <div id="show-blogs">
    <div class="overview display-type">
        <img src="../../assets/showBlogs/overView.png">
    </div>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteredBlogs" class="single-blog">
        <router-link v-bind:to="'/blog/'+blog.id">
            <h2 v-rainbow>{{blog.title | touppercase}}</h2>
        </router-link>
        <article>
            <div>{{blog.content | snippet}}</div>
            <div>{{blog.date}}</div>
        </article>
    </div>
    <div class="searchResult display-type" :style="{'display': (searchResult ? 'flex':'none')}">
        <img src="../../assets/showBlogs/noResult.png">
    </div>
    <div class="tips display-type" :style="{'display': (blogs.length==0 ? 'flex' : 'none')}">
        <img src="../../assets/showBlogs/tips.png">
    </div>
    <div class="pattern">
        <div>
            <img src="../../assets/showBlogs/left.png">
        </div>
        <div>
            <img src="../../assets/showBlogs/center.png">
        </div>
        <div>
            <img src="../../assets/showBlogs/right.png">
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'show-blogs',
  data(){
      return{
          blogs:[],
          search:"",
          searchResult:""
      }
  },
  created(){
      this.$http.get('https://my-blog-67f7c-default-rtdb.firebaseio.com/posts.json')
      .then(function(data){
          return data.json();
      })
      .then(function(data){
          var blogsArray = [];
          for(let key in data){
              data[key].id = key;
              blogsArray.push(data[key]);
          }
        this.blogs = blogsArray;
      })
  },
  computed:{
      filteredBlogs:function(){
          return this.blogs.filter((blog) =>{
              if(blog.title.match(this.search)==null){
                  this.searchResult=true;
              }else{
                  this.searchResult=false;
              }
              return blog.title.match(this.search);
          })
      }
  },
  filters:{
      "touppercase":function(value){
          return value.toUpperCase();
      },
      "snippet":function(value){
          if(value.length>20){
              return value.slice(0,20)+"...";
          }else{
              return value;
          }
      }
  },
  directives:{
      "rainbow":{
          bind(el,binding,vnode){
              el.style.color="#"+Math.random().toString(16).slice(2,8);
          }
      }
  }
}
</script>

<style scoped> 
#show-blogs{
    margin: 0 50px auto 50px;
    min-width:670px;
    padding:40px 40px 20px 40px;
    background: rgba(255,255,255,0.8);
    border-radius:15px;
}
.display-type{
    display: flex;
    justify-content: center;
}
.overview{
    margin-bottom:20px;
}
.overview img{
    width:150px;
}
.single-blog{
    box-sizing: border-box;
    padding: 20px;
    margin: 20px 0;
    background: white;
    border: 1px dotted #aaa;
}
article{
    display:flex;
    justify-content: space-between;
}
#show-blogs a{
    color: #444;
    text-decoration: none;
}
input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}
.searchResult, .tips{
    margin:70px auto 38px auto;
}
.searchResult img{
    width:230px;
}
.tips img{
    width:200px;
}
.pattern{
    display:flex;
    justify-content: space-between;
}
.pattern img{
    width:50px;
}
.pattern :nth-child(2) img{
    width:120px;
    margin-top:25px;
}
</style>
