<template>
  <div id='left-part'>
    <div class='contact-detail'>
      <div class='wechat'>
        <img class='pict-a'  src='../../assets/leftPart/wechat2.jpeg'/>
        <img class='pict-b' src='../../assets/leftPart/wechat.jpg'/>
      </div>
      <div class='contact-infor'>
        <div class='title-infor'>
            <span>联系我</span>
        </div>
        <div class='detail-infor'>
          <div>
            <Icon href="#icon-qq" fontSize="22px"/>
          </div>
          <div>
            <span title='点击复制' v-clipboard:copy="contactInfor.qqNum">{{contactInfor.qqNum}}</span>
          </div>
        </div>
        <div class='detail-infor'>
          <div>
            <Icon href="#icon-youxiang" fontSize="22px"/>
          </div>
          <div>
            <span title='点击复制' v-clipboard:copy="contactInfor.e_mail">{{contactInfor.e_mail}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class='data'>
      <div class='data-detail'>
        <span>博客总数</span>
        <span>{{numOfBlogs}}</span>
      </div>
      <div class='split-line'></div>
      <div class='data-detail black-detail'> 
        <span>分类数</span>
        <span>{{numOfCategories}}</span>
      </div>
      <div class='split-line'></div>
      <div class='data-detail'>
        <span>标签数</span>
        <span>{{numOfLabels}}</span>
      </div>
    </div>
    <div class='classification'>
      <SideMenu/>
    </div>
  </div>
</template>
<script>
import 'animate.css'
import Icon from '../../components/icon/index.vue'
import SideMenu from '../../components/sidemenu/sidemenu.vue'
import { message } from 'ant-design-vue'
export default{
  name:'left-part',
  components:{
    SideMenu,
    Icon
  },
  data(){
    return{
      contactInfor:{
        id:'-MppP7VPy9acqFAfwglo',
        qqNum:'',
        e_mail:''
      },
      numOfBlogs:0,
      numOfLabels:0,
      numOfCategories:0,
    }
  },
  methods:{
    getData:function(){
      this.$http.get('https://my-blog-67f7c-default-rtdb.firebaseio.com/contactinfor/'+this.contactInfor.id+".json")
      .then( data=> {
        return data.json();
      }).then(data => {
        this.contactInfor.qqNum=data.qqNum;
        this.contactInfor.e_mail=data.e_mail;
      }).catch(err => {
        message.info('连接错误');
        console.log(err);
      });

      this.$http.get('https://my-blog-67f7c-default-rtdb.firebaseio.com/posts.json')
      .then( data=> {
        return data.json();
      }).then(data => {
        if(data==null){
          this.numOfBlogs=0;
        }else{
          this.numOfBlogs = Object.keys(data).length;
        }
      }).catch(err => {
        message.info('连接错误');
        console.log(err);
      });

      this.$http.get('https://my-blog-67f7c-default-rtdb.firebaseio.com/labels.json')
      .then( data=> {
        return data.json();
      }).then(data => {
        if(data==null){
          this.numOfLabels=0;
        }else{
          this.numOfLabels = Object.keys(data).length;
        }
      }).catch(err => {
        message.info('连接错误');
        console.log(err);
      });

      this.$http.get('https://my-blog-67f7c-default-rtdb.firebaseio.com/categories.json')
      .then( data=> {
        return data.json();
      }).then(data => {
        if(data==null){
          this.numOfCategories=0;
        }else{
          this.numOfCategories = Object.keys(data).length;
        }
      }).catch(err => {
        message.info('连接错误');
        console.log(err);
      });
    }
  },
  created(){
    this.getData();
  },
  watch:{
   $route(to,from){
    this.getData();
    }
  },
}
</script>
<style scoped>
#left-part{
  width:300px;
  margin-bottom:20px;
  padding:0px;
  margin:0px;
}
.contact-detail{
  width:300px;
  background-color:rgba(255,255,255,0.8);
  border-radius:15px;
  margin-bottom:20px;
  display:flex;
}
.wechat{
  position: relative;
  width: 120px;
  height: 120px;
}
.wechat img{
  width:80px;
  height:80px;
  position: absolute;
  left: 20px;
  top: 20px;
  transition: all 1.5s;
  box-shadow: 0px 5px 5px #d4aae7;
  border-radius: 5px;
}
.wechat img:first-child{
  z-index: 1;
  backface-visibility: hidden;
}
.title-infor{
  height:16px;
  margin:0px;
  margin-bottom: 10px;
  display: flex;
}
.title-infor span{
  font-size:10px;
  color:#988d9e;
}
.wechat:hover img{
  transform: rotateY(180deg);
}
.contact-infor{
  width:180px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
.detail-infor{
  width:180px;
  display:flex;
  justify-content: flex-start;
}
.detail-infor span{
  text-indent:10px;
  height:21px;
  line-height:21px;
  display: inline-block;
  color:#988d9e;
  font-size:10px;
  margin-bottom:5px;
}
.detail-infor span:hover{
  animation:rubberBand;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
.data{
  background-image:url('../../assets/leftPart/databack.png');
  background-size:300px auto;
  background-repeat: no-repeat;
  margin-bottom:20px;
  width:300px;
  height:168px;
  background-color:rgba(255,255,255,0.8);
  border-radius:15px;
  display:flex;
  justify-content:space-around;
  align-items:center;
}
.data-detail{
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
}
.data-detail span:nth-child(1){
  font-size:15px;
  font-weight:bold;
  font-family: Microsoft JhengHei;
  margin-bottom:15px;
  color:#b9b8b8;
}
.data-detail span:nth-child(2){
  color:white;
  font-size:20px;
  font-weight:bold;
  font-family: Microsoft JhengHei;
  transition:all 0.5s ease-in-out;
}
.data-detail span:nth-child(2):hover{
  transform: scale(1.2,1.2);
  transition:all 0.5s ease-in-out;
}
.split-line{
  width:0.5%;
  background-color: #8590a6;
  height:70%;
  animation:lineHeight 2.5s ease-in-out;
  -webkit-animation: lineHeight 2.5s ease-in-out;
  -moz-animation: lineHeight 2.5s ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes lineHeight{
  from {
    height:70%;
  }
  to{
    height:30%;
  }
}
.classification{
  width:300px;
  background-color:rgba(255,255,255,0.8);
  border-radius:15px;
  margin-bottom:20px;
}
</style>