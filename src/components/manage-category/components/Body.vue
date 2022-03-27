<template>
    <div>
        <InputBox :tasks='tasks' @add-task="addNewTask"/>
        <ul :key="task.id" v-for="task in tasks" id="allTasks">
            <Task :task='task' @deleteTask='deleteTask'/>
        </ul>
    </div>
</template>
<script>
import InputBox from './InputBox.vue'
import Task from './Task.vue'
export default{
    name:'Body',
    components:{
        InputBox,
        Task,
    },
    data(){
        return {
            tasks:Array
        }
    },
    methods:{
        addNewTask(newTask){
            this.tasks.push(newTask);
        },
        deleteTask(id){
            this.tasks=this.tasks.filter((task) => task.id!==id);
        }
    },
    created(){
        this.tasks=[];
        this.$http.get('https://my-blog-67f7c-default-rtdb.firebaseio.com/categories.json')
        .then(function(data){
            return data.json();
        })
        .then(function(data){
            var tasksArray = [];
            for(let key in data){
                data[key].id = key;
                tasksArray.push(data[key]);
            }
            this.tasks = tasksArray;
        })
        .catch(err =>{
            alert('连接错误');
            console.log(err);
        });
    },
}
</script>
<style scoped>
*{
    margin:0px;
    padding:0px;
}
div {
    display:flex;
    flex-direction:column;
    justify-items: flex-start;
    align-items: flex-start;
    width:300px;
}
ul{
    display:flex;
    flex-direction: column;
    align-items: center;
}
</style>