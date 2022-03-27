<template>
    <nav>
        <ul>
            <li>
                <div>
                    <img src="../../assets/blogHead/head.png">
                </div>
            </li>
            <!-- <li>
                <router-link to="/mypage" exact>
                    <div>
                        <img src='../assets/Bronya.png'>
                    </div>
                    <span>首页</span>    
                </router-link>
            </li>     -->
            <li @mouseover='choose1=true' @mouseout='choose1=false'>
                <router-link to="/" exact>
                    <div>
                        <img :src="choose1 ? require('../../assets/blogHead/Kiana.png'):require('../../assets/blogHead/Kiana2.png')">
                    </div>
                    <span>首页</span>
                </router-link>
            </li> 
            <li @mouseover='choose2=true' @mouseout='choose2=false'>
                <router-link to="/add" exact>
                    <div>
                        <img :src="choose2 ? require('../../assets/blogHead/guanxing.png'):require('../../assets/blogHead/guanxing2.png')">
                    </div>
                    <span>写博客</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default{
    name:"blog-header",
    data(){
        return{
            choose1:Boolean,
            choose2:Boolean
        }
    },
    created(){
        this.choose1=false;
        this.choose2=false;
    }
}
</script>

<style scoped>
img{
    height:50px;
    margin-top: 5px;
}
a{
    text-decoration:none;
    display:flex;
    height: 60px;
    border-radius: 15px;
    width:150px;
}
ul{
    background-color:transparent;
    height:80px;
    display:flex;
}
li{
    list-style:none;
    display:flex;
    align-items: center;
    height:80px;
}
li:nth-child(1){
    width: 300px;
}
span{
    display:inline-block;
    color:black;
    height:80px;
    line-height:80px;
    height:60px;
    line-height:60px;
    padding-left:20px;
}
.router-link-active{
    color: #444;
}
</style>
