<template>
  <div id='side-menu'>
    <div class='title'><span>分类</span></div>
    <div class='single-item'>
      <span>全部</span>
      <!-- <span>{{total}}</span> -->
    </div>
    <div v-for="item in categories" class='single-item'>
      <span>{{item.text}}</span>
      <!-- <span>{{item.num}}</span> -->
    </div>
    <div class='title'><span>标签</span></div>
    <div class='single-item'>
      <span>全部</span>
      <!-- <span>{{total}}</span> -->
    </div>
    <div v-for="item in labels" class='single-item'>
      <span>{{item.text}}</span>
      <!-- <span>{{item.num}}</span> -->
    </div>
  </div>
</template>
<script>
export default{
  name:'sidemenu',
  data(){
    return{
      total:0,
      categories:[],
      labels:[],
      blogs:[]
    }
  },
  methods:{
    getData:function(){
      this.$http.get('https://my-blog-67f7c-default-rtdb.firebaseio.com/posts.json')
      .then(function(data){
          return data.json()
      }).then(function(data){
        if(data==null){
          this.total=0;
        }else{
          this.total = Object.keys(data).length;
          var blogsArray = [];
          for(let key in data){
              data[key].id = key;
              blogsArray.push(data[key]);
          }
          this.blogs = blogsArray;
        }
      });

      this.$http.get('https://my-blog-67f7c-default-rtdb.firebaseio.com/categories.json')
      .then(function(data){
          return data.json();
      })
      .then(function(data){
          var dataArray = [];
          for(let key in data){
              data[key].id = key;
              dataArray.push(data[key]);
          }
        this.categories = dataArray;
      });

      this.$http.get('https://my-blog-67f7c-default-rtdb.firebaseio.com/labels.json')
      .then(function(data){
          return data.json();
      })
      .then(function(data){
          var dataArray = [];
          for(let key in data){
              data[key].id = key;
              dataArray.push(data[key]);
          }
        this.labels = dataArray;
      });

      // this.blogs.forEach((item) => {
      //   item.selectedCategories.forEach((item) => {
      //     var length=this.categories.length;
      //     for(var i=0;i<length;i++){
      //       if(this.categories[i].text==item){
      //         this.categories[i].num++;
      //       }
      //     }
      //   });
      //   item.selectedLabels.forEach((item) => {
      //     var length=this.labels.length;
      //     for(var i=0;i<length;i++){
      //       if(this.labels[i].text==item){
      //         this.labels[i].num++;
      //       }
      //     }
      //   });
      // });
    },
  },
  created(){
    this.getData();
  },
  watch:{
   $route(to,from){
      this.getData();
    }
  }
}
</script>
<style scoped>
#side-menu{
  width:300px;
  border-radius:15px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding-bottom: 15px;
}
.title{
  color:#8590a6;
  font-size:15px;
  padding:10px;
  width:250px;
  display:flex;
  justify-content:flex-start;
  align-items: center;
}
.single-item{
  font-size:15px;
  background-color:white;
  width:250px;
  height:30px;
  line-height: 31px;
  border-bottom: 1px solid black;
  display:flex;
  justify-content:space-between;
  margin-bottom:5px;
  cursor: pointer;
  transition:all 0.3s ease-in-out;
}
.single-item:hover{
  background-color:#e4dfe4;
  transition:all 0.2s ease-in-out;
}
.single-item span:nth-child(1){
  margin-left: 5px;
}
.single-item span:nth-child(2){
  height:20px;
  line-height:20px;
  min-width: 20px;
  background-color:#e2dfdf;
  margin-top:7px;
  margin-right: 5px;
  text-align: center;
}
</style>