<template>
    <div>
        <InputBox :tasks='tasks' @add-task="addNewTask" @chooseAll='chooseAll' />
        <ul :key="task.id" v-for="task in tasks" id="allTasks">
            <Task :task='task' :status='status' @choose='choose' @deleteTask='deleteTask'/>
        </ul>
        <Funct :tasks='tasks' :status='status' @showChange='showChange'/>
    </div>
</template>
<script>
import InputBox from './InputBox.vue'
import Task from './Task.vue'
import Funct from './Funct.vue'
export default{
    name:'Body',
    components:{
        InputBox,
        Task,
        Funct
    },
    data(){
        return {
            tasks:Array,
            status:String,
        }
    },
    methods:{
        showChange(index){
           this.status=index;
        },
        addNewTask(newTask){
            this.tasks.push(newTask);
        },
        choose(id){
            this.tasks=this.tasks.map((task)=>
            {
                if(task.id==id){
                    task.reminder=!task.reminder;
                    return task;
                }
                return task;
            });
        },
        chooseAll(state){
            if(state=='1'){
                this.tasks.forEach(function(task){
                    task.reminder=true;
                })
            }else if(state=='2'){
                this.tasks.forEach(function(task){
                    task.reminder=false;
                })
            }
        },
        deleteTask(id){
            this.tasks=this.tasks.filter((task) => task.id!==id);
        }
    },
    created(){
        if (localStorage.getItem('tasks')) {
            this.tasks = JSON.parse(window.localStorage.getItem('tasks'));
        }else{
            this.tasks=[];
        }
        if (localStorage.getItem('status')) {
            this.status = window.localStorage.getItem('status');
        }else{
            this.status ='1';
        }
    },
    watch:{
        tasks:{
            handler(newValue){
                window.localStorage.setItem('tasks',JSON.stringify(newValue));
            },
            deep:true
        },
        status:{
            handler(newValue){
                window.localStorage.setItem('status',newValue);
            }
        }
    }
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
    align-items: center;
    width:300px;
}
ul{
    display:flex;
    flex-direction: column;
    align-items: center;
}
</style>