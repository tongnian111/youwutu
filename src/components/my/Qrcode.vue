<template>
	<div id="wrapper" class="default">
		<TopHeader :headerParam="headerParams"></TopHeader>
		<div id="contents">
			<div class="ma">
				<p>优物兔</p>
				<img src="http://119.29.101.67/youwutu/img/my-erweima.png">
				<p class="sao">扫一扫，快速下载</p>
			</div>
		</div>
	</div>
</template>

<script>
	import TopHeader from "../../components/public/TopHeader";
	//定义一个头部参数
	let topArr = [{ //第一个参数
		icon: "icon-fanhui", //iconfont图标
		text: "", //文字
		ev: "", //事件
		route: "/my" //路由
	}, { //第二个参数
		icon: "",
		text: "下载二维码",
		ev: "",
		route: ""
	}, { //第三个参数
		icon: "", //iconfont图标
		text: "分享", //文字
		ev: "", //事件
		route: "" //路由
	}];
	export default {
		name: 'qrcode',
		components: {
			TopHeader
		},
		data() {
			return {
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
		background: #020303;
		padding: R(20px) R(33px);
		height: R(1010px);
		.ma {
			background: #fff;
			height: R(801px);
			padding-top: R(209px);
			p {
				height: R(96px);
				line-height: R(96px);
				text-align: center;
				font-size: R(34px);
			}
			img {
				height: R(496px);
				width: R(496px);
				margin-left: R(80px);
				border: R(2px) solid #e6e9ed;
				margin-bottom: R(30px);
			}
			p.sao {
				font-size: R(24px);
				color: #656d78;
			}
		}
	}
</style>