<template>
	<div id="wrapper" class="default">
		<TopHeader :headerParam="headerParams"></TopHeader>
		<div id="contents">
			<div class="shang1">
				&nbsp;
				<input type="text" @blur="checkUsername" v-model="username" placeholder="请输入11位手机号">
			</div>
			<div class="shang2">
				&nbsp;
				<input type="text" @blur="checkCode" v-model="code" placeholder="请输入验证码">
				<img id="code" @click="getCode" :src="codeSrc" />
			</div>
			<div class="shang3">
				&nbsp;
				<input type="text" @keyup="checkNickName" v-model="nickName" placeholder="请输入昵称(10个字符以内)">
			</div>
			<div class="shang4">
				&nbsp;
				<input type="password" @keyup="checkPass" v-model="password" placeholder="请输入6~20位数字或字母密码">
			</div>
			<div class="shang5">
				&nbsp;
				<mt-button @click="register" type="primary" :disabled="disabled" size="large">完成</mt-button>
			</div>
		</div>
	</div>
</template>

<script>
	import TopHeader from "../../components/public/TopHeader";
	import { Toast, Indicator } from "mint-ui";
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
				codeSrc: "http://10.2.153.97/youwutuphp/youwutu/user/createcode",
				username: '',
				nickName: '',
				password: '',
				disabled: true,
				code: '',
				flag: [0, 0, 1, 0]
			}
		},
		methods: {
			getCode: function() {
				this.codeSrc = "http://10.2.153.97/youwutuphp/youwutu/user/createcode?t=" + new Date();
				var _this = this;
				setTimeout(function() {
					_this.code = _this.$cookie.get('code');
					_this.checkCode();
				}, 1000)
			},
			checkUsername: function() {
				let _this = this;
				this.$http.post("/youwutu/user/checkuser", {
					username: this.username
				}).then(function(res) {
					if(res.body.code === 0) {
						_this.flag.splice(0, 1, 1);
					} else {
						_this.flag.splice(0, 1, 0);
					}
					Toast({
						message: res.body.message,
						position: 'middle',
						duration: 3000
					});
				})
			},
			checkCode: function() {
				if(this.code === this.$cookie.get('code')) {
					this.flag.splice(1, 1, 1);
				} else {
					this.flag.splice(1, 1, 0);
				}
			},
			checkNickName: function() {
				if(this.nickName.trim().length <= 10) {
					this.flag.splice(2, 1, 1);
				} else {
					this.flag.splice(2, 1, 0);
				}
			},
			checkPass: function() {
				let re = /^[a-zA-Z0-9]{6,20}$/;
				if(re.test(this.password)) {
					this.flag.splice(3, 1, 1);
				} else {
					this.flag.splice(3, 1, 0);
				}
			},
			register: function() {
				Indicator.open({
					text: '注册中...',
					spinnerType: 'fading-circle'
				});
				var _this = this;
				this.$http.post("/youwutu/user/register", {
					username: this.username,
					password: this.password,
					nickname: this.nickName
				}).then(function(res) {
					console.log(res);
					if(res.body.code === 0) {
						_this.$router.push('/my');
					}
					Toast({
						message: res.body.message,
						position: 'middle',
						duration: 3000
					});
					Indicator.close();
				})
			}
		},
		beforeMount: function() {
			//Dom加载前自动调用
		},
		mounted: function() {
			//Dom加载完成自动调用此方法
			var _this = this;
			setTimeout(function() {
				_this.code = _this.$cookie.get('code');
				_this.checkCode();
			}, 1000)
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
			#code {
				float: right;
				height: R(79px);
				line-height: R(79px);
				width: R(209px);
				border: R(2px) solid #fc6e51;
				text-align: center;
			}
		}
		div.shang5 {
			background: none;
		}
	}
</style>