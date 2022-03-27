<template>
  <button @mouseover="ifDelete=true" @mouseout="ifDelete=false" >
    <router-link :to="'/edit/' + this.id">
      <div>
        <img :src="ifDelete ? require('../../assets/editBtn/edit.png') : require('../../assets/editBtn/edit2.png')">
      </div>
      <span>编辑</span>
    </router-link>
  </button>
</template>
<script>
export default{
  name:'editButton',
  props:['id'],
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
a{
  text-decoration:none;
  display:flex;
  justify-content: center;
  color:black;
}
button{
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
