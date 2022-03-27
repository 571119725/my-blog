<template>
  <div id="add-blog">
    <div class="page-title">
        <img src="../../assets/addBlog/addBlog.png">
    </div>
    <form v-if="!submitted">
        <label>博客标题:</label>
        <input type="text" v-model="blog.title" required />
        <label>博客内容:</label>
        <textarea v-model="blog.content"></textarea>
        <label>分类:</label>
        <div class='content'>
            <div id="checkboxes" v-for='category in categories'>
                <label>{{category.text}}</label>
                <input type="checkbox" :value='category.text' v-model="blog.selectedCategories">
            </div>
        </div>
        <label>标签:</label>
        <div class='content'>
            <div id="checkboxes" v-for='item in labels'>
                <label>{{item.text}}</label>
                <input type="checkbox" :value='item.text' v-model="blog.selectedLabels">
            </div>
        </div>
        <label>作者：</label>
        <input type="text" v-model="blog.author"/>
        <div v-on:click.prevent.once="post">
            <AddButton/>
        </div>
    </form>
    <div v-if="submitted">
        <h3>您的博客发布成功</h3>
    </div>
    <div id="preview" v-if="submitted">
        <h3>博客总览</h3> 
        <h1>{{blog.title}}</h1>
        <p>{{blog.author}}</p>
        <ul>
            <li v-for="item in blog.selectedCategories">
                {{item}}
            </li>
        </ul>
        <ul>
            <li v-for="item in blog.selectedLabels">
                {{item}}
            </li>
        </ul>
        <hr>
        <article><pre>{{blog.content}}</pre></article>
        <p class="nowDate">
            {{blog.date}}
        </p>
    </div>
  </div>
</template>

<script>
import AddButton from '../../components/addbtn/AddButton.vue'
export default {
  name: 'add-blog',
  components:{
      AddButton
  },
  data () {
    return {
      blog:{
          title:"",
          content:"",
          selectedCategories:[],
          selectedLabels:[],
          author:"",
          date:""
      },
      categories:[],
      labels:[],
      submitted:false,
      ifpass:false
    }
  },
  created(){
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
  },
  methods:{
      post: function(){
          let moment=require('moment');
          this.blog.date=moment(new Date().getTime()).format('YYYY-MM-DD HH:mm');
          console.log(this.blog.date);
          this.$http.post("https://my-blog-67f7c-default-rtdb.firebaseio.com/posts.json",this.blog)
          .then(function(data){
              this.submitted = true;
          });
      },
      makeSure: function(){
                if(this.password.length<8){
                    alert("密码位数小于八位！");
                    this.password="";
                    return 0;
                }
                if(this.username=="caozheng"){
                    if(this.password=="ckl9989wy9989"){
                        ifpass=true;
                        return 1;
                    }else{
                        alert("密码错误!");
                        this.password="";
                        return 1;
                    }
                }else{
                    alert("用户名错误！");
                    this.username="";
                    this.password="";
                    return 0
                }  
        }
    }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 0 50px 30px 50px;
    min-width:670px;
    padding:40px 40px 0px 40px;
    background: rgba(255,255,255,0.8);
    border-radius:15px;
}
.page-title{
    display: flex;
    justify-content: center;
}
.page-title img{
    width:150px;
}
label{
    display:block;
    margin:20px 0 10px;
}
input[type="text"],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    background:inherit;
    backDrop-filter:blur(10px);
    box-shadow:0 0 10px 0 lightblue;
    color:black;
}
textarea{
    height: 200px;
}
.content{
    display:flex;
}
#checkboxes{
    display:flex;
    justify-content:center;
    margin-right:10px;
}
#checkboxes label{
    margin: 5px 15px;
}
#checkboxes input{
    margin-top: 10px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:relative;
}
h3{
    margin-top: 10px;
}
#login{
    width: 400px;
    box-sizing: border-box;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
    text-align: center;
    margin:50px auto;
    border-radius: 40px;
}
hr{
    margin-top:20px;
    border-top:2px dotted black;
    width:400px;
}
article{
    font-size: 25px;
    margin-top:20px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-bottom:20px;
}
.nowDate{
    position:absolute;
    right:10px;
    bottom:10px;
}
</style>
