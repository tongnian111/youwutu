<template>
	<div id="wrapper" class="my">
		<TopHeader :headerParam="headerParams"></TopHeader>
		<div id="contents">
			<ul class="mm">
				<li>
					<router-link to="/login">登陆/注册</router-link>
				</li>
				<li><i class="iconfont icon-qianbao1 qianzi"></i>钱包<i class="iconfont icon-xiayiye1 houzi"></i></li>
				<li><i class="iconfont icon-gouwuche1 qianzi"></i>购物车<i class="iconfont icon-xiayiye1 houzi"></i></li>
				<li><i class="iconfont icon-icon_user-defined qianzi"></i>购物记录<i class="iconfont icon-xiayiye1 houzi"></i></li>
				<li><i class="iconfont icon-jifenmingxi qianzi"></i>积分记录<i class="iconfont icon-xiayiye1 houzi"></i></li>
				<li><i class="iconfont icon-shenghuo qianzi"></i>生活录<i class="iconfont icon-xiayiye1 houzi"></i></li>
				<li><i class="iconfont icon-tag19 qianzi"></i>收藏<i class="iconfont icon-xiayiye1 houzi"></i></li>
				<li><i class="iconfont icon-shezhi qianzi"></i>设置<i class="iconfont icon-xiayiye1 houzi"></i></li>
			</ul>
		</div>
		<FooterNav></FooterNav>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	import TopHeader from "../../components/public/TopHeader";
	import FooterNav from "../../components/public/FooterNav";
	//定义一个头部参数
	let topArr = [{ //第一个参数
		icon: "", //iconfont图标
		text: "", //文字
		ev: "", //事件
		route: "" //路由
	}, { //第二个参数
		icon: "",
		text: "我的",
		ev: "",
		route: ""
	}, { //第三个参数
		icon: "icon-qrcode-copy", //iconfont图标
		text: "", //文字
		ev: "", //事件
		route: "/qrcode" //路由
	}];
	export default {
		name: 'my',
		components: {
			TopHeader,
			FooterNav
		},
		data() {
			return {
				active: 'tab-container1',
				headerParams:topArr
			}
		},
		methods: {

		},
		beforeMount: function() {
			//Dom加载前自动调用

		},
		mounted: function() {
			//Dom加载完成自动调用此方法

		},
		updated: function() {

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
		background-color: #F5F7FA;
		ul.mm {
			li {
				font-size: R(30px);
				background: #fff;
				padding-right: R(22px);
				height: R(101px);
				line-height: R(101px);
				padding-left: R(22px);
				i.qianzi {
					color: #fc6e51;
					font-size: R(44px);
					margin-right: R(21px);
					font-weight: bold;
				}
				i.houzi {
					float: right;
					font-size: R(44px);
					color: #babdbf;
				}
			}
			li:nth-child(1) {
				height: R(141px);
				line-height: R(141px);
				text-align: center;
				a {
					color: #fc6e51;
				}
			}
			li:nth-child(2) {
				margin: R(24px) 0;
			}
			li:nth-child(3),
			li:nth-child(4) {
				border-bottom: R(4px) solid #f5f7fa;
			}
			li:nth-child(5),
			li:nth-child(6),
			li:nth-child(7) {
				margin-bottom: R(22px);
			}
		}
	}
</style>