<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <p>{{blog.author}}</p>
        <ul>
            <li v-for="category in blog.selectedCategories">
                {{category}}
            </li>
        </ul>
        <ul>
            <li v-for="item in blog.selectedLabels">
                {{item}}
            </li>
        </ul>
        <hr>
        <article><pre>{{blog.content}}</pre></article>
        <div class='blogdate'>{{blog.date}}</div>
        <div class="buttonchoose">
            <div @click="deleteSingleBlog" :style="{'display': (ifDisplay ? 'flex' : 'none')}">
                <DeleteButton/>
            </div>
            <EditButton :id='id'/>
        </div>  
    </div>
</template>
<script>
    import DeleteButton from '../../components/deletebtn/DeleteButton.vue' 
    import EditButton from '../../components/editbtn/EditButton.vue'
    export default{
        name: "single-blog",
        components:{
            DeleteButton,
            EditButton,
        },
        data(){
            return {
                blog:{},
                id:this.$route.params.id,
                identifyCodes: "1234567890",
                identifyCode: "",
                ifDisplay:Boolean,
            }
        },
        created(){
            this.$http.get('https://my-blog-67f7c-default-rtdb.firebaseio.com/posts/'
            +this.id+".json")
            .then(function(data){
                 return data.json();
            })
            .then(function(data){
                this.blog = data;
            });
            if(sessionStorage.getItem('loginStatus')){
              this.ifDisplay=true;
            }else{
              this.ifDisplay=false;
            }
        },
        methods:{
            deleteSingleBlog(){
                this.$http.delete("https://my-blog-67f7c-default-rtdb.firebaseio.com/posts/"+this.id+".json")
                    .then(response => {
                        this.$router.push({path:'/'})
                    })
            }
        }
    }
</script>
<style scoped>
.code {
  margin: 400px auto;
  width: 114px;
  height: 40px;
  border: 1px solid red;
}
#single-blog{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 50px 30px 50px;
    width:670px;
    padding:40px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 15px;
    box-shadow:0 0 10px 0 lightblue;
}
h1{
    margin-bottom:20px;
    font-family:'Times New Roman', Times, serif ;
}
hr{
    margin-top:20px;
    border-top:2px dotted black;
    width:400px;
}
article{
    font-size: 20px;
    margin-top:20px;
}
.buttonchoose{
    display: flex;
    justify-content: space-around;
    margin-top:20px;
}
a{
    text-decoration: none;
}
article{
    width:600px;
    min-height:100px;
}
.blogdate{
    margin:20px 100px auto auto;
}
</style>
