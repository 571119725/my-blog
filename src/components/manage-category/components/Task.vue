<template>
    <li class="showarea" :id='task.id'  @mouseover="ifshow=true" @mouseout="ifshow=false">
        <input v-model='singleTask.text' @blur="check" :class="task.reminder ? 'deletedata' : 'showdata'" readonly ondblclick='this.readOnly=false' onchange='this.readOnly=true'>   
        <div class='delete' @mouseover="ifcu=true" @mouseout="ifcu=false" @click='deletetask' :style="{'visibility': (ifshow ? 'visible' : 'hidden')}"> 
            <img :src="ifcu ? require('../../../assets/memorandum/cushanchu.png') : require('../../../assets/memorandum/xishanchu.png')" alt='删除键'>
        </div>
    </li>
</template>
<script>
export default {
    name:'Task',
    props:{
        task:Object,
    },
    data(){
        return{
            singleTask:this.task,
            ifshow:false,
            ifcu:false
        }
    },
    computed:{
    },
    methods:{
        deletetask(){
            this.$http.delete("https://my-blog-67f7c-default-rtdb.firebaseio.com/categories/"+this.task.id+".json")
            .catch(err => {
                alert('连接错误');
                console.log(err);
            });
            this.$emit('deleteTask',this.task.id);
        },
        check(){
            if(this.task.text==''){
                this.$http.delete("https://my-blog-67f7c-default-rtdb.firebaseio.com/categories/"+this.task.id+".json")
                .catch(err => {
                    alert('连接错误');
                    console.log(err);
                });
                this.$emit('deleteTask',this.task.id);
            }else{
                this.$http.put('https://my-blog-67f7c-default-rtdb.firebaseio.com/categories/'
                +this.task.id+".json",this.task)
                .catch(err =>{
                    alert('连接错误');
                    console.log(err);
                });
            }  
        }
    }
}
</script>
<style scoped>
.show{
    display: flex;
}
.hide{
    display: none;
}
li{
    margin-bottom:2px;
    background-color:white ;
    display: flex;
    width: 250px;
    height: 30px;
    box-shadow: 0 0px 0px rgba(0,0,0,0.10),0 2px 2px rgba(0,0,0,0.10),0 2px 2px rgba(0,0,0,0.10),0 2px 2px rgba(0,0,0,0.10);
}
input{
    color:black;
    outline: none;
    width:220px;
    height:30px;
    border: 0px;
    font-size: 10px;
}
.showdata {
    transition:all 0.5s;
    text-decoration: none;
}
.deletedata {
    transition:all 0.5s;
    text-decoration: line-through;
    color:#21aa98;
}
.delete{
    visibility: hidden;
    display:flex;
    flex-direction: column;
    justify-content: center;
}
.delete img{
    max-width:10px;
    margin:auto 10px;
}
</style>