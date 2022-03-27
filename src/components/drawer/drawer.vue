<template>
  <div>
    <div class='head-protrait' type="primary" @click="showDrawer">
      <img src='../../assets/rightPart/homepage.jpg' alt='头像'>
    </div>
    <a-drawer
      :bodyStyle='{height:"100%",padding:"0"}'
      placement="right"
      :closable="false"
      :visible="visible"
      @close="onClose"
      width='17%'
    >
    <div class='content'>
      <div><span>LOGIN IN</span></div>
      <div>
        <input type='password' placeholder='口令！！！' v-model='password'/>
      </div>
      <div @mouseover="ifDelete=true" @mouseout="ifDelete=false" @click='loginIn'>
        <div>
          <img :src="ifDelete ? require('../../assets/login/btn2.png') : require('../../assets/login/btn1.png')">
        </div>
      </div>
    </div>
    </a-drawer>
  </div>
</template>
<script>
import { message } from 'ant-design-vue';
export default {
  data() {
    return {
      password:'',
      visible: false,
      ifDelete:false,
      correctPassword:'ckl9989'
    };
  },
  components:{
    message
  },
  methods: {
    showDrawer() {
      if(sessionStorage.getItem('loginStatus')){
        this.$router.push('/Home');
      }else{  
        this.visible = true;
      }
    },
    onClose() {
      this.visible = false;
    },
    loginIn(){
      if(this.password==''){
        message.info('密码不得为空！');
      }else if(this.password==this.correctPassword){ 
        message.info('登录成功！');
        sessionStorage.setItem('loginStatus',true);
        this.$router.push('/Home');
      }
    }
  },
  created(){
    this.$http.get('https://my-blog-67f7c-default-rtdb.firebaseio.com/contactinfor/-MppP7VPy9acqFAfwglo.json')
    .then( data=> {
      return data.json();
    }).then(data => {
      this.correctPassword=data.password;
    });
  }
};
</script>
<style scoped>
.head-protrait img{
  height:60px;
  width:60px;
  border-radius: 50%;
}
.content{
  background-image: url('../../assets/login/loginback.jpg');
  background-size:auto 100%;
  background-repeat: no-repeat;
  height:100%;
}
.content{
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}
.content input{
  background-color: rgba(255,255,255,0.8);
  outline: none;
  text-indent:5px;
  border-radius: 5px;
  width:150px;
  height:25px;
}
.content span{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size:30px;
  font-weight:bold;
}
.content div{
  margin-bottom:20px;
}
.content img{
  height:60px;
}
</style>