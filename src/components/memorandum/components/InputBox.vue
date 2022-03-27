<template>
    <form target="#" >
        <div id='chooseAll' @click='chooseAll' :style="{'visibility': (tasks.length>0? 'visible' : 'hidden')}">
            <img :src="showChooseAll ? require('../../../assets/memorandum/cu.png') : require('../../../assets/memorandum/xi.png')" alt="下拉">
        </div>
        <label>
            <input v-model='text' @keydown.enter="addTask" autocomplete="off" type="text" placeholder="该做些什么呢。。。" name="todo">
        </label>
    </form>
</template>
<script>
export default{
    name:'InputBox',
    props:{
        tasks:Array,
    },
    data(){
        return{
            id:'',
            text:'',
            reminder:false
        }
    },
    methods:{
        chooseAll(){
            if(this.choose==false){
                this.choose=!this.choose;
                this.$emit('chooseAll','1');
            }else{
                this.choose=!this.choose;
                this.$emit('chooseAll','2');
            }
        },
        addTask(){
            event.preventDefault();
            if(this.text.trim()!=''){
                const newTask={
                    id: Math.floor(Math.random()*100000),
                    text: this.text.trim(),
                    reminder:false
                };
                this.text='';
                this.$emit('add-task',newTask);
            }
        },
    },
    computed:{
        showChooseAll(){
            let state=1;
            this.tasks.forEach(element => {
                if(element.reminder==false){
                    state=0;
                }
            });
            if(state==1){
                return true;
            }else{
                return false;
            }
        }
    }
}
</script>
<style scoped>
form{
    background: rgba(255,255,255,0.8);
    display: flex;
    width: 290px;
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
img{
    max-width:20px;
    margin:auto 5px;
}
input{
    background: rgba(255,255,255,0.8);
    font-size: 10px;
    outline: none;
    width:260px;
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