<template>
	<div id="app">
		<!-- <TopHeader v-show="headerIsVisible" :top_header_param="$store.state.topHeaderParam"></TopHeader> -->
		<!--<transition enter-active-class="animated slideInRight" leave-active-class="animated">-->
		<router-view></router-view>
		<!--</transition>-->
		<!-- <FooterNav v-show="navIsVisible"></FooterNav> -->
	</div>
</template>
<!--<transition enter-active-class="animated slideInRight" leave-active-class="animated slideInLeft">-->
<script>
	import { mapGetters, mapActions } from 'vuex';
	import TopHeader from "./components/public/TopHeader";
	import FooterNav from "./components/public/FooterNav";
	export default {
		name: 'app',
		components: {
			TopHeader,
			FooterNav
		},
		data() {
			return {

			}
		},
		beforeMount: function() {
			let pathname = this.$route.name.toLowerCase();
			//	console.log(pathname)
			switch(pathname) {
				case '':
					this.setFooterNavIndex(1);
					this.setHeaderText([{ //第一个参数
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
					}])
					break;
				case 'lifecontents':
					this.setFooterNavIndex(2);
					this.setHeaderText([{ //第一个参数
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
					}]);
					break;
				case 'integralcontents':
					this.setFooterNavIndex(3);
					this.setHeaderText([{ //第一个参数
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
					}]);
					break;
				case 'mycontents':
					this.setFooterNavIndex(4);
					this.setHeaderText([{ //第一个参数
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
					}]);
					break;
			}
		},
		methods: {
			...mapActions([
				'footerNavIndex',
				'headerInfo'
			]),
			setFooterNavIndex: function(index) {
				this.footerNavIndex({
					navIndex: index
				});
			},
			setHeaderText: function(arr) {
				this.headerInfo({
					data: arr
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	#app {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	#wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}
</style>