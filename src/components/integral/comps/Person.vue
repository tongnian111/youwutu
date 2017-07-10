<template>
  <div id="contents">
    <div class="main">
      <ul class="ul1">
        <li>所有</li>
        <li>其他</li>
        <li>手机</li>
        <li>配件</li>
        <li>虚拟</li>
        <li>箱包</li>
        <li>手机</li>
        <li>配件</li>
        <li>虚拟</li>
        <li>箱包</li>
        <li>手机</li>
        <li>配件</li>
        <li>虚拟</li>
        <li>箱包</li>
        <li>手机</li>
        <li>配件</li>
        <li>虚拟</li>
        <li>箱包</li>
      </ul>
      <ul class="ul2">
        <li>
            <div>
              <img src="/static/img/jifen_neirong1.png">
            </div>
            <div class="div2">
              <div class="div3">
                <p class="pp">话费充值卡30元</p>
                <p>积分3500</p>
                 <mt-progress :value="80" :bar-height="5" style="top:-3px;margin:0;padding:0"></mt-progress>
              </div> 
              <div class="div4">
                <p class="p2">1积分/次</p>
                <img src="/static/img/jifen_gouwuche.png"> 
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
      
    }
  },
  methods:{
  	
  },beforeMount:function(){
  	//Dom加载前自动调用
  	console.log("beforeMount")
  },mounted:function(){
  	//Dom加载完成自动调用此方法
  	console.log("mounted")
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
      .ul1{
        width: R(160px);
        height: 100%;
        background: #fff;
        margin-right: R(20px);
        li{
          width: R(160px);
          height: R(80px);
          font-size: R(22px);
          text-align: center;
          line-height: R(80px);
          border-bottom:2px solid #ccc;
        }
      }
      .ul2{
        width:  R(540px);
        height: 100%;
        overflow: hidden;
        li{
          width: 100%;
          height: R(238px);
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
            .pp{
              margin-top: R(20px);
              font-size: R(25px);
              margin-bottom: R(105px);
            }
          }
          .div4{
            margin-top: R(100px);
            margin-left: R(36px);
            img{
              width: R(65px);
              height: R(52px);
            }
            .p2{
              margin-bottom: R(20px);
              color: #64d6b9;
            }
          }
        }
      }
    }
  }
</style>
