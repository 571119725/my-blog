<template>
    <ul id='functlist' :style="{'display': (tasks.length>0? 'flex' : 'none')}">
        <li>
            <div class="function">
                <div><span >{{updateContent}}</span><span> item left</span></div>
                <div>
                    <button id="button1" :class="clickfir ? 'showborder' : 'transparent'" @click='showAll'>All</button>
                    <button id="button2" :class="clicksec ? 'showborder' : 'transparent'" @click='showActive'>Active</button>
                    <button id="button3" :class="clickthr ? 'showborder' : 'transparent'" @click='showCompleted'>Completed</button>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    name:'Funct',
    props:{
        tasks:Array,
        status:String
    },
    data(){
        return{
            clickfir:Boolean,
            clicksec:Boolean,
            clickthr:Boolean,
        }
    },
    computed:{
        updateContent:function(){
            let count=0
            this.tasks.forEach(element => {
                if(element.reminder==false){
                    count++;
                }
            });
            return count
        }
    },
    methods:{
        showAll(){
            this.clickfir=true;
            this.clicksec=false;
            this.clickthr=false;
            this.$emit('showChange','1');
        },
        showActive(){
            this.clickfir=false;
            this.clicksec=true;
            this.clickthr=false;
            this.$emit('showChange','2');
        },
        showCompleted(){
            this.clickfir=false;
            this.clicksec=false;
            this.clickthr=true;
            this.$emit('showChange','3');
        },
        
    },
    created(){
        switch(this.status){
            case '1':
                this.clickfir=true;
                this.clicksec=false;
                this.clickthr=false;
                break;
            case '2':
                this.clickfir=false;
                this.clicksec=true;
                this.clickthr=false;
                break;
            case '3':
                this.clickfir=false;
                this.clicksec=false;
                this.clickthr=true;
                break;
        }
    },
    emits:['showChange']
}
</script>
<style scoped>
ul{
    display: flex;
    flex-direction: column;
    align-items: center;
}
li{
    list-style-type: none;
}
.function{
    background-color: white;
    width: 290px;
    height: 30px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 2px rgba(0,0,0,0.10),0 0px 0px rgba(0,0,0,0.10),0 2px 2px rgba(0,0,0,0.10),0 2px 2px rgba(0,0,0,0.10);
}
.function span{
    font-size:10px;
    color:#777777;
}
.function span:nth-child(1){
    margin-left: 10px;
}
button{
    padding:2px;
    font-size:5px;
    text-align: center;
    background-color: white;
    color: #777777;
    margin: auto 2px;
    height:15px;
    line-height: 15px;
    border:0.5px solid transparent;
}
.transparent{
    border:0.5px solid transparent;
}
.showborder{
    font-weight: bold;
}
.function button:hover{
    border: 0.5px solid #ead7d7;
}
.function div:nth-child(3){
    visibility: hidden;
}
</style>