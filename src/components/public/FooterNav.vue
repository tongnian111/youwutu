<template>
  <div id="footernav">
   		<div class="foot_nav" @click="setFooterNavIndex(1)">
				<router-link to="/" class="box" exact active-class="active">
					<i class="iconfont icon-shouye"></i>
					<span>主页</span>
				</router-link>
			</div>
			<div class="foot_nav" @click="setFooterNavIndex(2)">
				<router-link to="/life" class="box" exact active-class="active">
					<i class="iconfont icon-shenghuo"></i>
					<span>生活</span>
				</router-link>
			</div>
			<div class="foot_nav" @click="setFooterNavIndex(3)">
				<router-link to="/integral" class="box" exact active-class="active">
					<i class="iconfont icon-jifen"></i>
					<span>积分</span>
				</router-link>
			</div>
			<div class="foot_nav" @click="setFooterNavIndex(4)">
				<router-link class="box" to="/my" exact active-class="active">
					<i class="iconfont icon-wode"></i>
					<span>我的</span>
				</router-link>
			</div>
  </div>
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'default',
  data () {
    return {
     	active:1
    }
  },
  methods:{
    ...mapActions([
    'footerNavIndex',
	  ]),setFooterNavIndex:function(index){
	  		this.footerNavIndex({navIndex:index});
	  }
  },beforeMount:function(){
  	//Dom加载前自动调用
//	console.log("beforeMount")
  },mounted:function(){
  	//Dom加载完成自动调用此方法
//	console.log("mounted")
  }
}
</script>

<style scoped lang="scss">
@charset "utf-8";
$ui-width:720px;
@function R($px) {
    @return $px/$ui-width*7.2rem;
}
#footernav{
		width: 100%;
		height: R(100px);
		border: R(1px) solid #F5F7FA;
		display: flex;
		padding-top: R(30px);
		.foot_nav{
			flex: 1;
			height: 100%;
				.box{
					display: flex;
					flex-direction: column;
					text-align: center;
					color: #666666;
					span{
						font-size: R(30px);
					}
					.iconfont{
						font-size: R(40px);
					}
				}
				.box.active>span,.box.active .iconfont{
						color: #FB7B61;
				}
		}
}

</style>
