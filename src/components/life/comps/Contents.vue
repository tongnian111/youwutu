<template>
  <div id="contents">
   		<div class="shangd">
          <ul id="yipai">
            <li @click="tar($event)">推荐</li>
            <li @click="tar($event)">美景</li>
            <li @click="tar($event)">美食</li>
            <li @click="tar($event)">视频</li>
            <li @click="tar($event)">发布</li>
          </ul>   
      </div>
      <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a>
                <img src="/static/img/my_ban_1.jpg" />
              </a>
            </div>
            <div class="swiper-slide">
              <a>
                <img src="/static/img/my_ban_2.jpg" />
              </a>
            </div>
            <div class="swiper-slide">
              <a>
                <img src="/static/img/my_ban_3.jpg" />
              </a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'integral',
  data () {
    return {
     
    }
  },
  methods:{
  	tar:function(e){
      // var a = e.target;
      console.log(e.target)
      
      var yipai = document.getElementById("yipai").getElementsByTagName("li");
      // console.log(yipai)
      var len = yipai.length;
      for(var i=0;i<len;i++){
        console.log(target[i])
        // len[i].style.color = "#000"
      }
      // console.log(lag)
      e.target.style.color="#fc6e51";
      // a.style.border="R(2px) solid #fc6e51";
    }
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
  .shangd{
    height:R(82px);
    line-height: R(76px);
    /*background: red;*/
    ul{
      display: flex;
      height:R(82px);
      line-height: R(76px);
      justify-content: space-around;
      li{
        font-size: R(24px);
        padding: 0 R(25px);
        /*color: #fc6e51;
        border-bottom: R(2px) solid #fc6e51;*/
      }
      li:hover{
        color: #fc6e51;
        border-bottom: R(2px) solid #fc6e51;
      }
    }
  }
  .swiper-container {
        width: 100%;
        height: 100%;
        a {
          display: block;
          width: 100%;
          height: 100%;
          img {
            width: 100%;
          }
        }
      }
}
</style>
