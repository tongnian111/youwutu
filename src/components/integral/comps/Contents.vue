<template>
  <div id="contents">
      <ul class="ul1">
        <li><a href="#/person">人气区</a></li>
        <li><a href="#/jifen">积分区</a></li>
        <li><a href="#/tiyan">体验区</a></li>
        <li><a href="#/dingdan">订单区</a></li>
      </ul>
      <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              swip1
            </div>
            <div class="swiper-slide">
              swip2
            </div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
     
  </div>
</template>

<script>


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
  #contents{
  	flex: 1;
  	overflow-y: auto;
  }
  .ul1{
    display:flex;
    flex-direction: row;
    height: R(82px);
    line-height:  R(82px);
    li{
      width:25%;
      font-size: 16px;
      text-align: center;
    }



  }
</style>
