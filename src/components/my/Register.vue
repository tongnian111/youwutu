<template>
	<div id="wrapper" class="default">
		<TopHeader :headerParam="headerParams"></TopHeader>
		<div id="contents">
			<div class="shang1">
				&nbsp;
				<input type="text" placeholder="请输入11位手机号" ref="username">
			</div>
			<div class="shang2">
				&nbsp;
				<input type="text" placeholder="请输入验证码">
				<img src="http://10.2.153.97/youwutuphp/youwutu/user/createcode" onclick="this.src='http://10.2.153.97/youwutuphp/youwutu/user/createcode?t='+new Date()" />
			</div>
			<div class="shang3">
				&nbsp;
				<input type="text" placeholder="请输入昵称(10个字符以内)" ref="nkname">
			</div>
			<div class="shang4">
				&nbsp;
				<input type="password" placeholder="请输入6~20位数字或字母密码" ref="psw">
			</div>
			<button @click="reg">完成</button>
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
			reg:function(){
				this.$http.post('/api/user/register', {
			        username: this.$refs.username.value,
        			password: this.$refs.psw.value,
        			nickname: this.$refs.nkname.value
			      }).then(response => {

			        console.log(response.body.message);
			        if(response.body.message == "注册成功"){
			        	location.hash = "/login"
			        }
		        
			      }, response => {
			        // error callback
			      });
			}
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
				width: R(280px);
			}
			img {
				float: right;
				height: R(79px);
				line-height: R(79px);
				width: R(332px);
				border: R(2px) solid #fc6e51;
				text-align: center;
			}
		}
		button{
			margin-top: R(60px);
			margin-bottom: 0;
			text-align: center;
			padding: 0;
			display: inline-block;
			color: #fc6e51;
			outline:none;
			height: R(81px);
			line-height: R(81px);
			width:100%;
			background:#fff;
			border:R(2px) solid #fc6e51;
		}
	}
</style>