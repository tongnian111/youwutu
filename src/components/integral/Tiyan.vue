<template>
	<div id="wrapper" class="tiyan">
		<TopHeader :headerParam="headerParams"></TopHeader>
		<div id="contents">
			<div class="box">
				<div><img src="http://119.29.101.67/youwutu/img/t1.png"/></div>
				<div class="box1">
					<p class="p1">小米数据线</p>
					<p class="p2">总经验:<span class="sp1">600</span></p>
					<p class="p3">1经验/人次</p>
					<mt-progress :value="200/600*100" :bar-height="5" style="top:-3px;margin:0;padding:0"></mt-progress>
					
				</div>
				<div class="box2"> <a href="#"><img src="http://119.29.101.67/youwutu/img/jifen_gouwuche.png"></a></div>
			</div>
			<div class="box">
				<div><img src="http://119.29.101.67/youwutu/img/t2.png"/></div>
				<div class="box1">
					<p class="p1">Skullcandy lnkd(骷髅头)</p>
					<p class="p2">总经验:<span class="sp1">600</span></p>
					<p class="p3">12经验/人次</p>
					<mt-progress :value="3000/4000*100" :bar-height="5" style="top:-3px;margin:0;padding:0"></mt-progress>
					
				</div>
				<div class="box2"> <a href="#"><img src="http://119.29.101.67/youwutu/img/jifen_gouwuche.png"></a></div>
			</div>
		</div>
		<!--<FooterNav></FooterNav>-->
	</div>
</template>

<script>
	import { Toast, Indicator } from "mint-ui";
	import { mapGetters, mapActions } from 'vuex';
	import TopHeader from "../../components/public/TopHeader";
	//如果有页脚导航需要添加   <FooterNav></FooterNav>
	import FooterNav from "../../components/public/FooterNav";
	//定义一个头部参数
	let topArr = [{ //第一个参数
		icon: "icon-fanhui", //iconfont图标
		text: "", //文字
		ev: "", //事件
		route: "/integral" //路由
	}, { //第二个参数
		icon: "",
		text: "体验区",
		ev: "",
		route: ""
	}, { //第三个参数
		icon: "", //iconfont图标
		text: "", //文字
		ev: "", //事件
		route: "" //路由
	}];
	export default {
		name: 'tiyan',
		components:{TopHeader,FooterNav},
		data() {
			return {
					headerParams: topArr, //头部信息参数
					 list:[]
			}
		},
		methods: {
//			getData:function(){
//		      this.$http.get('/static/state/tiyan.json').then(response => {
//		       console.log(response.body);
//		        console.log(eval(response.bodyText));
//		      this.list =eval(response.bodyText);
//		         
//		      }, response => {
//		        // error callback
//		        console.log("error")
//		      });
//			}
		},
		beforeMount: function() {
			//Dom加载前自动调用
		
		},
		mounted: function() {
			//Dom加载完成自动调用此方法
//			this.getData();
			Toast({
				message: "加载成功!",
				position: 'middle',
				duration: 3000
			});
		}
	}
</script>

<style scoped lang="scss">
	@charset "utf-8";
	$ui-width:720px;
	@function R($px) {
		@return $px/$ui-width*7.2rem;
	}
	#contents {
		flex: 1;
		overflow-y: auto;
		background: #f5f7fa;
		.box{
			display: flex;
			width: R(720px);
			height: R(173px);
			border-bottom: 1px solid #ccc;
			padding: 10px;
			padding-right: 0;
			img{
			width: R(162px);
			height: R(172px);
			}
		}
		.box1{
			margin-left: R(12px);

			width: R(440px);
			height: R(172px);
			.p1{
				font-size: R(20px);
				height:  R(70px);
				line-height: R(70px); 
				color: #171717;
			}
			.p2{
				font-size: R(18px);
				height:  R(30px);
				line-height: R(30px); 
			}
			.p3{
				font-size: R(16px);
				height:  R(33px);
				line-height: R(33px); 
				color: #f60;
			}
			.sp1{
				color: #f60;
			}
		}
		.box2{

			img{
				width: R(42px);
				height: R(42px);
				margin-top: R(82px);
				margin-left: R(22px);
			}
		}
	}

</style>