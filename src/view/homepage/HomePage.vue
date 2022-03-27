<template>
<div id='home-page'>
  <div class='contact'> 
    <div class='title'><span>编辑资料</span></div>
    <div class='contact-body'>
      <div class='contact-content'>
        <div class='contact-detail'>
          <div>
            <Icon href="#icon-qq" fontSize="23px"/>
          </div>
          <div>
            <input type='text'v-model='contactInfor.qqNum' maxlength="12"/>
          </div>
        </div>
        <div class='contact-detail'>
          <div>
            <Icon href="#icon-youxiang" fontSize="23px"/>
          </div>
          <div>
            <input type='text' v-model='contactInfor.e_mail'/>
          </div>
        </div>
         <div class='contact-detail'>
          <div>
            <Icon href="#icon-mima" fontSize="23px"/>
          </div>
          <div>
            <input type='password' v-model='contactInfor.password' maxlength="12"/>
          </div>
        </div>
      </div>
      <div class='contact-btn'><a-button type='primary' @click='uploadInfor'>保存</a-button></div>
    </div>
  </div>
  <div class='manage-block'>
    <div>
      <div class='title'><span>管理分类</span></div>
      <ManageCategory/>
    </div>
    <div>
      <div class='title'><span>管理标签</span></div>
      <ManageLabel/>
    </div>
  </div>
</div>
</template>

<script>
import ManageLabel from '../../components/manage-label/App.vue' 
import ManageCategory from '../../components/manage-category/App.vue' 
import Icon from '../../components/icon/index.vue'
import { message } from 'ant-design-vue'
export default {
  name: 'HomePage',
  components: {
    Icon,
    ManageLabel,
    ManageCategory
  },
  data(){
    return{
      contactInfor:{
        id:'-MppP7VPy9acqFAfwglo',
        qqNum:'',
        e_mail:'',
        password:''
      }
    }
  },
  methods:{
    uploadInfor:function(){
      this.$http.put('https://my-blog-67f7c-default-rtdb.firebaseio.com/contactinfor/'+this.contactInfor.id+".json",this.contactInfor)
      .then(data=>{
        message.info('保存成功！');
      })
      .catch(err =>{
          message.info('连接错误');
          console.log(err);
      });
    }
  },
  created(){
    this.$http.get('https://my-blog-67f7c-default-rtdb.firebaseio.com/contactinfor/'+this.contactInfor.id+".json")
    .then( data=> {
      return data.json();
    }).then(data => {
      this.contactInfor.qqNum=data.qqNum;
      this.contactInfor.e_mail=data.e_mail;
      this.contactInfor.password=data.password;
    })
  },
} 
</script>
<style scoped>
#home-page{
    margin: 0 50px auto 50px;
    width:670px;
    padding:40px 40px 20px 40px;
    background: rgba(255,255,255,0.8);
    border-radius:15px;
}
.contact{
  margin-bottom:20px;
}
.contact, .contact-body{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title, .contact-body, .contact-content{
  width:100%;
}
.title{
  margin-bottom:10px;
}
.title span{
  font-size:20px;
  font-weight: bold;
}
.contact-body{
  background-color:white;
}
.contact-content{
  display:flex;
  justify-content: space-around;
  margin:20px 0px;
}
.contact-detail{
  display: flex;
  justify-content:center;
}
.contact-detail input{
  background-color:#c9c0ca;
  height:25px;
  border-radius: 5px;
  margin-left:5px;
  text-indent:5px;
}
.contact-btn{
  margin-bottom:20px;
}
.manage-block{
  display:flex;
  margin-bottom:20px;
  justify-content: space-between;
}
</style>
