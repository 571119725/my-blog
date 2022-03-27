<template>
    <li class="showarea" :id='task.id'  @mouseover="ifshow=true" @mouseout="ifshow=false" :style="{'display': showChange}">
        <div class='choose' @click='choose'>
            <img :src='task.reminder ? require("../../../assets/memorandum/xuanzhong.png") : require("../../../assets/memorandum/weixuanzhong.png")' alt='是否选中'>
        </div>
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
        status:String,
    },
    data(){
        return{
            singleTask:this.task,
            ifshow:false,
            ifcu:false
        }
    },
    computed:{
        showChange(){
            let style;
            switch(this.status){
                case '1':
                    style='flex';
                    break;
                case '2':
                    if(this.task.reminder==false){
                        style='flex';
                    }else{
                        style='none';
                    }
                    break;
                case '3':
                    if(this.task.reminder==true){
                        style='flex';
                    }else{
                        style='none';
                    }
                    break;
                default:
                    break;
            }
            return style;
        }
    },
    methods:{
        choose(){
            this.$emit('choose',this.task.id);
        },
        deletetask(){
            this.$emit('deleteTask',this.task.id);
        },
        check(){
            if(this.task.text==''){
                    this.$emit('deleteTask',this.task.id)
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
    width: 290px;
    height: 30px;
    box-shadow: 0 0px 0px rgba(0,0,0,0.10),0 2px 2px rgba(0,0,0,0.10),0 2px 2px rgba(0,0,0,0.10),0 2px 2px rgba(0,0,0,0.10);
}
input{
    color:black;
    outline: none;
    width:260px;
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
.choose{
    display:flex;
    flex-direction: column;
    justify-content: center;
}
.choose img{
    max-width:20px;
    margin:auto 5px;
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