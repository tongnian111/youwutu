<template>
  <div id="contents">
    <div class="main">
      <ul class="ul1">
       <li><a href="javascript:;" class="collection-item"
       v-for="listName in list"
       @click="selected(listName)"
       :class="activeName == listName.name? 'active':''">{{listName.name}}</a></li>
   
      </ul>
      <ul class="ul2">
        <li v-for="item in proList">
            <div>
              <img :src="item.img">
            </div>
            <div class="div2">
              <div class="div3">
                <p class="pp">{{item.name}}</p>
                <p>{{item.price}}元/台</p>
                 <mt-progress :value="80" :bar-height="5" style="top:-3px;margin:0;padding:0" class="tiao"></mt-progress>
              </div> 
              <div class="div4">
              
                <img src="http://119.29.101.67/youwutu/img/jifen_gouwuche.png"> 
              </div>

             
            </div>
        </li>
      </ul>
    </div>    
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Progress } from 'mint-ui';

  Vue.component(Progress.name, Progress);

export default {
  name: 'person',
  data () {
    return {
       list: [],
        activeName: {},
        
        type:1,
        page:1,
        proList:[]
        }
  },
  methods:{
    lodeData:function(){
      this.$http.get('/static/state/ul.json').then(response => {
      // get body data
       console.log(response);
        console.log(eval(response.bodyText));
      this.list =eval(response.bodyText);
     
    }, response => {
      // error callback
      console.log("error")
      });
    },
    getData:function(){
      this.$http.get('/youwutu/getpro/getProList?page=3',{params:{type:this.type,page:this.page}}).then(response => {
       console.log(response.body);
        // console.log(eval(response.bodyText));
      // this.list =eval(response.bodyText);
          if(response.body.code === 0){
            this.proList = this.proList.concat(response.body.data)
          }else{
            this.proList=[]
          }
      }, response => {
        // error callback
        console.log("error")
      });
    },
  	selected:function(listName) {
      this.activeName = listName.name;
      this.type = listName.type;
      this.page = 1;
      this.getData();
    }
  },beforeMount:function(){
  	//Dom加载前自动调用
  	console.log("beforeMount")
  },mounted:function(){
  	//Dom加载完成自动调用此方法
  	console.log("mounted")
    this.lodeData()
    this.getData()
  }
}
</script>

<style scoped lang="scss">
@charset "utf-8";
$ui-width:720px;
@function R($px) {
    @return $px/$ui-width*7.2rem;
}
  *{
    padding:0;
    margin:0;
  }
  #contents{
    flex: 1;
    overflow-y: auto;
    background:#f5f7fa;
    height: 100%;
    .main{
      display: flex;
      height: 100%;
      .ul1{
        overflow-x: auto;
        width: R(160px);
        height: 100%;
        background: #fff;
        margin-right: R(20px);
        display: flex;
        flex-direction: column;
        li{
          width: R(160px);
          height: R(80px);
          font-size: R(22px);
          text-align: center;
          line-height: R(80px);
          background: #fff;
          flex: 1;
          a{
            display: block;
            width: R(160px);
            height: R(80px);
            font-size: R(22px);
            border-bottom:1px solid #ccc;
             background: #fff;
          }
          a.active{
            color: red
          }
        }
      }
      .ul2{
        width:  R(540px);
        height: 100%;
        overflow-x: auto;
        li{
          width: 100%;
          height: R(240px);
          border-bottom: 2px solid #ccc;
          overflow: hidden;
          display: flex;
          font-size: R(20px);
          img{
            width: R(200px);
            margin-top: R(20px);
            margin-right: R(20px);
          }
          .div2{
            display: flex;
          }
          .div3{
            display: flex;
            flex-direction: column;
            width: 100%;
            .pp{
              margin-top: R(20px);
              font-size: R(20px);
              margin-bottom: R(25px);
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3; //文本行数
              overflow: hidden;
              width: 100%;
            }
            .mt-progress-content{
              background: #f60 !important;
            }
          }
          .div4{
            margin-top: R(100px);
            margin-left: R(36px);
            overflow: hidden;
            img{
              width: R(65px);
              height: R(52px);
              margin-bottom: R(60px);
              overflow: hidden;
              margin-right: R(60px);
            }
            .p2{
         /*     margin-bottom: R(30px);*/
              color: #64d6b9;
            }
          }
        }
      }
    }
  }
</style>
