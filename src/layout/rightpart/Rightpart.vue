<template>
  <div id="right-part">
    <div class='top'>
      <div class='head-protrait'>
        <Drawer/>
      </div>
      <div class='personal-signature'>
        <span>{{sign}}</span>
      </div>
    </div>
    <div class='memorandum'>
      <Memorandum/>
    </div>
  </div>
</template>
<script>
import Drawer from '../../components/drawer/drawer.vue'
import Memorandum from '../../components/memorandum/App.vue' 
export default{
  name:'right-part',
  components:{
    Memorandum,
    Drawer
  },
  data(){
    return{
      sign:'TECH OTAKUS SAVE THE WORLD'
    }
  }
}
</script>
<style scoped>
#left-part{
  background-color:transparent;
  width:300px;
}
.top{
  position:relative;
  background-image:url('../../assets/rightPart/background.jpg');
  background-size: 300px;
  background-repeat:no-repeat;
  height:250px;
  width:300px;
  border-radius:15px;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  align-content: center;
}
.head-protrait{
  position:absolute;
  left:125px;
  top:130px;
  z-index:2;
  border-radius: 50%;
  height:60px;
  width:60px;
}
.head-protrait::after{
  position:absolute;
  top:0px;
  left:0px;
  content:'';
  z-index:-1;
  width:100%;
  height:100%;
  border-radius: 50%;
  animation:wave 2.5s ease-out;
  animation-iteration-count:infinite;
}
@keyframes wave{
  from{
    transform: scale(1,1);
    background-color: rgba(95,158,150,0.7);
  }
  to{
    transform: scale(1.4,1.4);
    background-color: rgba(95,158,150,0);
  }
}
.personal-signature{
  height:82px;
  background: rgba(255,255,255,0.8);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius:15px;
  display:flex;
  justify-content:center;
  align-items: center;
}
.personal-signature span{
  font-size:20px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  margin:auto;
}
.memorandum{
  margin-top:20px;
  background: rgba(255,255,255,0.8);
  border-radius:15px;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}
</style>