<template>
  <div id="edit-blog">
    <div class="page-title">
        <img src="../../assets/editBlog/editBlog.png">
    </div>
    <form v-if="!submitted">
        <label>博客标题</label>
        <input type="text" v-model="blog.title" required />
        <label>博客内容</label>
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
        <!-- <div class="buttonchoose"> -->
        <div v-on:click.prevent.once="post">
            <AddButton/>
        </div>
    </form>

    <div v-if="submitted">

        <h3>您的博客发布成功</h3>
    </div>

    <div id="preview" v-if="submitted">
        <h3>博客总览</h3>
        <p>博客标题: {{blog.title}}</p>
        <p>博客内容</p>
        <p>{{blog.content}}</p>
        <p>博客分类</p>
        <ul>
            <li v-for="category in blog.selectedCategories">
                {{category}}
            </li>
        </ul>
        <p>博客标签</p>
        <ul>
            <li v-for="item in blog.selectedLabels">
                {{item}}
            </li>
        </ul>
        <p>博客作者</p>
        <p>{{blog.author}}</p>
    </div>
  </div> 
</template>

<script>
import AddButton from '../../components/addbtn/AddButton.vue'
export default {
  name: 'edit-blog',
  components:{
      AddButton
  },
  data () {
    return {
      blog:{},
      categories:[],
      labels:[],
      submitted:false,
      id:this.$route.params.id,
    }
  },
  methods:{
      fetchData: function(){
        this.$http.get('https://my-blog-67f7c-default-rtdb.firebaseio.com/posts/'
        +this.id+".json")
        .then(response =>{
            this.blog = response.body;
        })
      },
      getclasses:function(){
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
      post: function(){
        this.$http.put('https://my-blog-67f7c-default-rtdb.firebaseio.com/posts/'
        +this.id+".json",this.blog)
        .then(function(data){
            console.log(data);
            this.submitted = true;
        });
      }
  },
  created(){
      this.getclasses();
      this.fetchData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#edit-blog *{
    box-sizing: border-box;
}
#edit-blog{
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
    outline: none;
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
}
#checkboxes label{
    display: inline-block;
    margin: 5px 15px;
}
#checkboxes input{
    display: inline-block;
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
