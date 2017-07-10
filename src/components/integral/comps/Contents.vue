<template>
  <div id="contents">
      <ul class="ul1">
        <li><a href="#/integral/person">人气区</a></li>
        <li><a href="#/integral/jifen">积分区</a></li>
        <li><a href="#/integral/tiyan">体验区</a></li>
        <li><a href="#/integral/dingdan">订单区</a></li>
      </ul>
      <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="/static/img/jifenswipe1.png" class="img" />

            </div>
            <div class="swiper-slide">
              <img src="/static/img/default_banner_2.jpg" class="img1" />
            </div>
          </div>
          <div class="swiper-pagination"></div>
      </div>

      <div class="main">

        <div class="box">
          <img src="/static/img/sp1.png" class="img2" >
          <p class="p1">积分：<span>3500</span></p>

          <mt-progress :value="80" :bar-height="5" style="top:-3px;margin:0;padding:0"></mt-progress>
          <p class="p2"><span class="span1">2849</span><span>3500</span><span class="span3">651</span></p>
          <p class="p2"><span>以参与</span><span>总需人次</span><span>剩余</span></p>
    
        </div>
        <div class="box">
          <img src="/static/img/sp1.png" class="img2" >
          <p class="p1">积分：<span>3500</span></p>

          <mt-progress :value="80" :bar-height="5" style="top:-3px;margin:0;padding:0"></mt-progress>
          <p class="p2"><span class="span1">2849</span><span>3500</span><span class="span3">651</span></p>
          <p class="p2"><span>以参与</span><span>总需人次</span><span>剩余</span></p>
  
        </div>
        <div class="box">
          <img src="/static/img/sp1.png" class="img2" >
          <p class="p1">积分：<span>3500</span></p>

          <mt-progress :value="80" :bar-height="5" style="top:-3px;margin:0;padding:0"></mt-progress>
          <p class="p2"><span class="span1">2849</span><span>3500</span><span class="span3">651</span></p>
          <p class="p2"><span>以参与</span><span>总需人次</span><span>剩余</span></p>
    
        </div>
        <div class="box">
          <img src="/static/img/sp1.png" class="img2" >
          <p class="p1">积分：<span>3500</span></p>

          <mt-progress :value="80" :bar-height="5" style="top:-3px;margin:0;padding:0"></mt-progress>
          <p class="p2"><span class="span1">2849</span><span>3500</span><span class="span3">651</span></p>
          <p class="p2"><span>以参与</span><span>总需人次</span><span>剩余</span></p>
     
        </div>
        <div class="box">
          <img src="/static/img/sp1.png" class="img2" >
          <p class="p1">积分：<span>3500</span></p>

          <mt-progress :value="80" :bar-height="5" style="top:-3px;margin:0;padding:0"></mt-progress>
          <p class="p2"><span class="span1">2849</span><span>3500</span><span class="span3">651</span></p>
          <p class="p2"><span>以参与</span><span>总需人次</span><span>剩余</span></p>

        </div>
        <div class="box">
          <img src="/static/img/sp1.png" class="img2" >
          <p class="p1">积分：<span>3500</span></p>

          <mt-progress :value="80" :bar-height="5" style="top:-3px;margin:0;padding:0"></mt-progress>
          <p class="p2"><span class="span1">2849</span><span>3500</span><span class="span3">651</span></p>
          <p class="p2"><span>以参与</span><span>总需人次</span><span>剩余</span></p>
    
        </div>
      </div>
  </div>
</template>

<script>

import Vue from 'vue'
import { Progress } from 'mint-ui';

Vue.component(Progress.name, Progress);


export default {

  name: 'test',
  data () {
    return {
     
    }
  },
  methods:{
  	
  },beforeMount:function(){
  	//Dom加载前自动调用

  },mounted:function(){
  	//Dom加载完成自动调用此方法
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 3000, //可选选项，自动滑动
        loop: true,
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination',
      })
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
    background:#e6e9ed;
    height: 100%;
  }
  .ul1{
    display:flex;
    flex-direction: row;
    height: R(82px);
    line-height:  R(82px);
    background:#fff;
    li{
      width:25%;
      font-size:R(16px);
      text-align: center;
    }
  }
  .swiper-container{
    width:R(720px);
    .img{
      width:100%;
    }
    .img1{
      height:R(322px);
      width:100%;
    }
  }


  .main{
      width:100%;
      height: 100%;
      margin-top:R(4px);
      display:flex;
      flex-direction: row;
      flex-wrap: wrap;
      .box{
     
       border: 1px solid #ccc;
        padding:R(20px);
        background:#fff;
        width:R(315px);
        height:R(420px);
        .img2{
          width:R(240px);
          margin-top:R(10px);
          margin:R(10px) R(40px) R(10px);

        }
        .p1{
          width:100%;
          text-align:center;
          font-size:R(20px);
         

        }
        .p2{
          font-size:R(18px);
          display:flex;
          justify-content: space-between;
        }
        .span1{
            color: #fd876f;
          }
          .span3{
            color: #4dd0af;
          }
     

      }
     
  }
</style>
