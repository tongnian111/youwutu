<template>
	<div id="wrapper" class="default">
		<TopHeader :headerParam="headerParams"></TopHeader>
		<div id="contents">
			<div class="shang1">
				&nbsp;
				<input type="text" placeholder="请输入11位手机号">
			</div>
			<div class="shang2">
				&nbsp;
				<input type="text" placeholder="请输入验证码">
				<a href="#">获取验证码</a>
			</div>
			<div class="shang3">
				&nbsp;
				<input type="text" placeholder="请输入昵称(10个字符以内)">
			</div>
			<div class="shang4">
				&nbsp;
				<input type="password" placeholder="请输入6~20位数字或字母密码">
			</div>
			<div class="shang5">
				&nbsp;
				<a href="#">完成</a>
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
		text: "注册",
		ev: "",
		route: ""
	}, { //第三个参数
		icon: "", //iconfont图标
		text: "", //文字
		ev: "", //事件
		route: "" //路由
	}];
	export default {
		name: 'register',
		components: {
			TopHeader
		},
		data() {
			return {
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
		padding: R(82px) R(32px) R(0px) R(32px);
		background-color: #F5F7FA;
		div {
			height: R(81px);
			line-height: R(81px);
			background: #fff;
			font-size: R(26px);
			padding-left: R(21px);
			margin-bottom: R(21px);
			input {
				outline: none;
				border: 0;
				/*border-left:R(4px) solid #ccc;*/
				width: R(450px);
			}
		}
		div.shang2 {
			input {
				width: R(400px);
			}
			a {
				float: right;
				height: R(79px);
				line-height: R(79px);
				width: R(179px);
				border: R(2px) solid #fc6e51;
				text-align: center;
			}
		}
		div.shang5 {
			margin-top: R(60px);
			margin-bottom: 0;
			text-align: center;
			padding: 0;
			border: R(2px) solid #fc6e51;
			a {
				display: inline-block;
				color: #fc6e51;
			}
		}
	}
</style>