<template>
	<div id="wrapper" class="login">
		<TopHeader :headerParam="headerParams"></TopHeader>
		<div id="contents">
			<div class="zhang">
				账号
				<input type="text" @blur="checkUsername" v-model="username" placeholder="请输入11位手机号">
			</div>
			<div class="mi">
				密码
				<input type="password" @keyup="checkPass" v-model="password" placeholder="请输入6~20位的密码">
				<p>
					<a href="#">忘记密码</a>
				</p>
				<mt-button @click="login" size="large" type="primary" plain :disabled="disabled">登陆</mt-button>
				<mt-button @click="toRegister" size="large" type="primary" plain style="margin-top: 20px;">注册</mt-button>
			</div>
		</div>
	</div>

</template>

<script>
	import TopHeader from "../../components/public/TopHeader";
	import { Toast, Indicator } from "mint-ui";
	
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
		components: {
			TopHeader
		},
		data() {
			return {
				headerParams: topArr,
				username: "",
				password: "",
				flag: [0, 0],
				disabled:true
			}
		},
		methods: {
			toRegister: function() {
				this.$router.push('/register');
			},
			checkUsername: function() {
				let re = /^1[34578]\d{9}$/;
				if(re.test(this.username)){
					this.flag.splice(0, 1, 1);
				}else{
					this.flag.splice(0, 1, 0);
					Toast({
						message: "用户名格式不正确",
						position: 'middle',
						duration: 3000
					});
				}
			},
			checkPass: function() {
				let re = /^[a-zA-Z0-9]{6,20}$/;
				if(re.test(this.password)) {
					this.flag.splice(1, 1, 1);
				} else {
					this.flag.splice(1, 1, 0);
				}
			},login:function(){
				let _this = this;
				this.$http.post("/youwutu/user/login",{username:this.username,password:this.password}).then(function(res){
					if(res.body.code == 0){
						_this.$router.push('/my');
					}
					Toast({
						message: res.body.message,
						position: 'bottom',
						duration: 3000
					});
				});
			}
		},
		beforeMount: function() {
			//Dom加载前自动调用

		},
		mounted: function() {
			//Dom加载完成自动调用此方法

		},
		watch: {
			flag: {
				handler: function(newVal) {
					for(var i = 0; i < newVal.length; i++) {
						if(newVal[i] == 0) {
							this.disabled = true;
							return;
						}
					}
					this.disabled = false;
				},
				deep: true
			}
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
		a.denglu {
			display: block;
			height: R(79px);
			line-height: r(79px);
			border: R(2px) solid #fc6e51;
			color: #fc6e51;
			text-align: center;
			margin-bottom: R(31px);
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