<template>
    <form target="#" >
        <label>
            <input v-model='text' @keydown.enter="addTask" autocomplete="off" type="text" placeholder="回车添加，双击修改" name="todo">
        </label>
    </form>
</template>
<script>
import { message } from 'ant-design-vue';
export default{
    name:'InputBox',
    props:{
        tasks:Array,
    },
    data(){
        return{
            id:'',
            text:'',
        }
    },
    methods:{
        addTask(){
            event.preventDefault();
            if(this.text.trim()!=''){
                const newTask={
                    text: this.text.trim(),
                    num:0
                };
                this.$http.post("https://my-blog-67f7c-default-rtdb.firebaseio.com/categories.json",newTask)
                .then(function(data){
                    return data.json();
                }).then(function(data){
                    newTask.id=data.name;
                }).catch(err =>{
                    message.info('连接错误');
                    console.log(err);
                });
                this.text='';
                this.$emit('add-task',newTask);
            }
        },
    },
}
</script>
<style scoped>
form{
    background: rgba(255,255,255,0.8);
    display: flex;
    width: 250px;
    height: 30px;
    box-shadow: 0 0px 0px rgba(0,0,0,0.10),0 5px 5px rgba(0,0,0,0.10),0 5px 5px rgba(0,0,0,0.10),0 5px 5px rgba(0,0,0,0.10);
    margin-bottom:2px;
}
div{
    background-color:transparent;
    visibility: hidden;
    display:flex;
    flex-direction: column;
    justify-content: center;
}
input{
    background: rgba(255,255,255,0.8);
    font-size: 10px;
    outline: none;
    width:250px;
    height:30px;
    border: 0px;
    color:#21aa98;
}
input::-webkit-input-placeholder {
    color:#ead7d7;
    font-style: italic;
    font-size: 10px;
}
</style>