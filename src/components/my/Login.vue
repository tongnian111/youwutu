<template>
	<div id="wrapper" class="login">
		<TopHeader :headerParam="headerParams"></TopHeader>
		<div id="contents">
			<div class="zhang">
				账号
				<input type="text" placeholder="请输入11位手机号" ref="username">
			</div>
			<div class="mi">
				密码
				<input type="password" placeholder="请输入6~20位的密码" ref="psw">
				<p>
					<a href="#/my/register">忘记密码</a>
				</p>
				<button class="denglu" @click="logg">登陆</button>
				<router-link to="/register" class="zhuce">注册</router-link>
			</div>
		</div>
	</div>

</template>

<script>
	import TopHeader from "../../components/public/TopHeader";
	let topArr = [{ //第一个参数
		icon: "icon-fanhui", //iconfont图标
		text: "", //文字
		ev: "", //事件
		route: "/my" //路由
	}, { //第二个参数
		icon: "",
		text: "登录",
		ev: "",
		route: ""
	}, { //第三个参数
		icon: "", //iconfont图标
		text: "", //文字
		ev: "", //事件
		route: "" //路由
	}];

	export default {
		name: 'login',
		components:{TopHeader},
		data() {
			return {
				headerParams: topArr
			}
		},
		methods: {
			logg:function(){
	      		this.$http.post('/api/user/login', {
	              username: this.$refs.username.value,
	              password: this.$refs.psw.value
	            }).then(response => {

	              console.log(response.body.message);
	              if(response.body.message == "登录成功!"){
	                location.hash = "#/"
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
		.zhang {
			height: R(81px);
			line-height: R(81px);
			background: #fff;
			font-size: R(26px);
			padding-left: R(36px);
			margin-bottom: R(32px);
			input {
				outline: none;
				border: 0;
				border-left: R(4px) solid #ccc;
				margin-left: R(34px);
				width: R(500px);
			}
		}
		.mi {
			height: R(81px);
			line-height: R(81px);
			background: #fff;
			font-size: R(26px);
			padding-left: R(36px);
			input {
				outline: none;
				border: 0;
				margin-left: R(34px);
				width: R(500px);
			}
		}
		p {
			height: R(58px);
			line-height: R(58px);
			margin-bottom: R(72px);
			a {
				text-decoration: underline;
				font-size: R(26px);
				float: right;
			}
		}
		button.denglu {
			width:100%;
		    display: block;
		    height: R(79px);
		    line-height: r(79px);
		    border: R(2px) solid #fc6e51;
		    color: #fc6e51;
		    text-align: center;
		    margin-bottom: R(31px);
		    outline:none;
		    background:#fff;
		}
		a.zhuce {
			display: block;
			height: R(79px);
			line-height: r(79px);
			border: R(2px) solid #48cfad;
			color: #48cfad;
			text-align: center;
		}
	}
</style>