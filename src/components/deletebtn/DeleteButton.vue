<template>
  <button @mouseover="ifDelete=true" @mouseout="ifDelete=false" > 
    <div>
      <img :src="ifDelete ? require('../../assets/deleteBtn/delete.png') : require('../../assets/deleteBtn/delete2.png')">
    </div>
    <span>删除</span>
    </button>
</template>
<script>
export default{
  name:'deleteButton',
  data(){
    return{
      ifDelete:Boolean
    }
  },
  created(){
    this.ifDelete=false;
  }
}
</script>
<style scoped>
button{
  display:flex;
  justify-content: center;
  height:60px;
  padding:5px 10px;
  border:5px solid lightblue ;
  border-radius: 15px;
  margin:20px;
}
img{
  height:40px;
  border-radius: 25px;
}
span{
  height:40px;
  line-height:40px;
  padding-left:5px;
}
</style>