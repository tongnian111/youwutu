<template>
	<div id="footernav">
		<div class="foot_nav" @click="setFooterNavIndex(1)">
			<router-link to="/" class="box" exact active-class="active">
				<i class="iconfont icon-shouye"></i>
				<span>主页</span>
			</router-link>
		</div>
		<div class="foot_nav" @click="setFooterNavIndex(2)">
			<router-link to="/life" class="box" exact active-class="active">
				<i class="iconfont icon-shenghuo"></i>
				<span>生活</span>
			</router-link>
		</div>
		<div class="foot_nav" @click="setFooterNavIndex(3)">
			<router-link to="/integral" class="box" exact active-class="active">
				<i class="iconfont icon-jifen"></i>
				<span>积分</span>
			</router-link>
		</div>
		<div class="foot_nav" @click="setFooterNavIndex(4)">
			<router-link class="box" to="/my" exact active-class="active">
				<i class="iconfont icon-wode"></i>
				<span>我的</span>
			</router-link>
		</div>
	</div>

</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	export default {
		name: 'default',
		data() {
			return {
				active: 1
			}
		},
		methods: {
			...mapActions([
				'footerNavIndex',
				'headerInfo'
			]),
			setFooterNavIndex: function(index) {
				var topArr;
				switch(index) {
					// case  表 首页头部信息
					case 1:
						topArr = [{ //第一个参数
							icon: "icon-search", //iconfont图标
							text: "", //文字
							ev: "", //事件
							route: "/search" //路由
						}, { //第二个参数
							icon: "",
							text: "主页",
							ev: "",
							route: ""
						}, { //第三个参数
							icon: "", //iconfont图标
							text: "", //文字
							ev: "", //事件
							route: "" //路由
						}];
						break;
						//  case  2  表 生活页面头部信息
					case 2:
						topArr = [{ //第一个参数
							icon: "icon-search", //iconfont图标
							text: "", //文字
							ev: "", //事件
							route: "/search" //路由
						}, { //第二个参数
							icon: "",
							text: "生活",
							ev: "",
							route: ""
						}, { //第三个参数
							icon: "icon-fabu", //iconfont图标
							text: "", //文字
							ev: "", //事件
							route: "life/release" //路由
						}];
						break;
						//case 3 表积分页面头部 信息
					case 3:
						topArr = [{ //第一个参数
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
							icon: "icon-sangedian", //iconfont图标
							text: "", //文字
							ev: "", //事件
							route: "integral/publicData" //路由
						}];
						break;
						//case 4 表 我的页面头部信息
					case 4:
						topArr = [{ //第一个参数
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
							route: "my/qrcode" //路由
						}];
						break;
				}
				this.footerNavIndex({
					navIndex: index
				});
				this.headerInfo({
					data:topArr
				});
			}
		},
		beforeMount: function() {
			//Dom加载前自动调用
			//	console.log("beforeMount")
		},
		mounted: function() {
			//Dom加载完成自动调用此方法
			//	console.log("mounted")
		}
	}
</script>

<style scoped lang="scss">
	@charset "utf-8";
	$ui-width:720px;
	@function R($px) {
		@return $px/$ui-width*7.2rem;
	}
	
	#footernav {
		width: 100%;
		height: R(100px);
		border: R(1px) solid #F5F7FA;
		display: flex;
		padding-top: R(30px);
		.foot_nav {
			flex: 1;
			height: 100%;
			.box {
				display: flex;
				flex-direction: column;
				text-align: center;
				color: #666666;
				span {
					font-size: R(30px);
				}
				.iconfont {
					font-size: R(40px);
				}
			}
			.box.active>span,
			.box.active .iconfont {
				color: #FB7B61;
			}
		}
	}
</style>