<template>
	<div id="wrapper" class="integral">
		<TopHeader :headerParam="headerParams"></TopHeader>
		<div id="contents">
			<ul class="ul1">
				<li>
					<router-link to="/integral">人气区</router-link>
				</li>
				<li>
					<router-link to="/jifen">积分区</router-link>
				</li>
				<li>
					<router-link to="/tiyan">体验区</router-link>
				</li>
			</ul>
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img src="http://119.29.101.67/youwutu/img/jifenswipe1.png" class="img" />

					</div>
					<div class="swiper-slide">
						<img src="http://119.29.101.67/youwutu/img/default_banner_2.jpg" class="img1" />
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>

			<div class="main">

				<div class="box" v-for="item in list">
					<img :src="'http://119.29.101.67/youwutu/img/'+item.src" class="img2">
					<p class="p1">积分：<span>{{item.itegral}}</span></p>

					<mt-progress :value="item.itegral1/item.itegral2*100" :bar-height="5" style="top:-3px;margin:0;padding:0"></mt-progress>
					<p class="p2"><span class="span1">{{item.itegral1}}</span><span>{{item.itegral2}}</span><span class="span3">{{item.itegral3}}</span></p>
					<p class="p2"><span>以参与</span><span>总需人次</span><span>剩余</span></p>

				</div>

			</div>
		</div>
		<FooterNav></FooterNav>
	</div>
</template>

<script>
	import TopHeader from "../../components/public/TopHeader";
	import FooterNav from "../../components/public/FooterNav";
	import { Toast, Indicator,MessageBox} from "mint-ui";

	let topArr = [{ //第一个参数
		icon: "", //iconfont图标
		text: "", //文字
		ev: "", //事件
		route: "" //路由
	}, { //第二个参数
		icon: "",
		text: "积分",
		ev: "",
		route: ""
	}, { //第三个参数
		icon: "", //iconfont图标
		text: "", //文字
		ev: "", //事件
		route: "" //路由
	}];

	export default {
		name: 'integral',
		components: {
			//			Person,
			//			Jifen,
			//			Tiyan,
			//			Dingdan,
			TopHeader,
			FooterNav
		},
		data() {
			return {
				list: [],
				headerParams: topArr, //头部信息参数
			}
		},
		methods: {

		},
		beforeMount: function() {
			//Dom加载前自动调用

		},
		mounted: function() {
			//Dom加载完成自动调用此方法
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 3000, //可选选项，自动滑动
				loop: true,
				autoplayDisableOnInteraction: false,
				pagination: '.swiper-pagination',
			});
			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});
			this.$http.get('/youwutuphp/youwutu/integral/getIntegralData').then(response => {
				// get body data
				if(response.body.code === 0){
					this.list = response.body.data;
				}
				Toast({
					message: response.body.message,
					position: 'middle',
					duration: 3000
				});
				Indicator.close();
			}, response => {
				Indicator.close();
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
		background: #e6e9ed;
		height: 100%;
		.ul1 {
			display: flex;
			flex-direction: row;
			height: R(82px);
			line-height: R(82px);
			background: #fff;
			li {
				flex: 1;
				font-size: R(16px);
				text-align: center;
			}
		}
		.swiper-container {
			width: R(720px);
			.img {
				width: 100%;
			}
			.img1 {
				height: R(322px);
				width: 100%;
			}
		}
		.main {
			width: 100%;
			height: 100%;
			margin-top: R(4px);
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			.box {
				border: 1px solid #ccc;
				padding: R(20px);
				background: #fff;
				width: R(315px);
				height: R(420px);
				.img2 {
					width: R(240px);
					margin-top: R(10px);
					margin: R(10px) R(40px) R(10px);
				}
				.p1 {
					width: 100%;
					text-align: center;
					font-size: R(20px);
				}
				.p2 {
					font-size: R(18px);
					display: flex;
					justify-content: space-between;
				}
				.span1 {
					color: #fd876f;
				}
				.span3 {
					color: #4dd0af;
				}
			}
		}
	}
</style>