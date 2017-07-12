<template>
	<div id="wrapper" class="my">
		<TopHeader :headerParam="headerParams"></TopHeader>
		<div id="contents">
			<ul class="mm">
				<li>
					<img id="headerImg" v-if="isLogin" :src="headerImg" />
					<router-link v-if="!isLogin" to="/login">登陆/注册</router-link>
					<a v-if="isLogin">{{this.username}}</a>
					<a id="loginoutBtn" @click="loginOut" v-if="isLogin">退出</a>
				</li>
				<li><i class="iconfont icon-qianbao1 qianzi"></i>钱包<i class="iconfont icon-xiayiye1 houzi"></i></li>
				<li>
					<router-link to="/cart">
						<i class="iconfont icon-gouwuche1 qianzi"></i>购物车<i class="iconfont icon-xiayiye1 houzi"></i>
					</router-link>
				</li>
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
	import { Toast, Indicator, MessageBox } from "mint-ui";
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
				headerParams: topArr,
				isLogin: false,
				username: '',
				nickName: '',
				uid: "",
				headerImg: 'http://119.29.101.67/youwutu/img/default1.jpg'
			}
		},
		methods: {
			checkLogin: function() {
				this.isLogin = this.$cookie.get('uid') ? true : false;
				this.username = this.$cookie.get('username');
				this.uid = this.$cookie.get('uid');
				this.nickName = this.$cookie.get('nickname');
			},
			loginOut: function() {
				let _this = this;
				MessageBox.confirm('确定执行此操作?', '提示').then(action => {
					if(action) {
						this.$http.post("/youwutu/user/loginOut", {
							uid: this.$cookie.get('uid')
						}).then(function(res) {
							_this.checkLogin();
							Toast({
								message: res.body.message,
								position: 'bottom',
								duration: 3000
							});
						})
					}
				}).catch(err => {

				})
			}
		},
		beforeMount: function() {
			//Dom加载前自动调用
			this.checkLogin()
		},
		mounted: function() {
			//Dom加载完成自动调用此方法

		},
		updated: function() {
			this.checkLogin()
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
				align-items: center;
				display: flex;
				#headerImg {
					width: R(100px);
					height: R(100px);
					border-radius: 50%;
				}
				a {
					color: #fc6e51;
					flex: 1;
				}
				#loginoutBtn {
					text-align: right;
					font-size: R(30px);
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