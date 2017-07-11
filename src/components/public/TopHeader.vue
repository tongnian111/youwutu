<template>
	<div id="topheader">
		<div class="item">
			<a class="href left_icon">
				<i class="iconfont" @click="firse_jump($event)" :class="top_header_param[0].icon"></i>
			</a>
		</div>
		<div class="item">
			<a class="href">
				<span class="title">{{top_header_param[1].text}}</span>
			</a>
		</div>
		<div class="item">
			<!--top_header_param[2].route-->
			<a class="href right_icon">
				<i class="iconfont" @click="third_jump($event)" :class="top_header_param[2].icon"></i>
				<span>{{top_header_param[2].text}}</span>
			</a>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	let pathname = '';
	export default {
		name: 'topheader',
		props: { //参数接收
			top_header_param: Array //检测参数类型 是数组
		},
		data() {
			return {

			}
		},
		methods: {
			...mapActions([
				'footerNavIndex',
				'headerInfo',
				'setNavShow'
			]),
			firse_jump: function(e) {
				location.hash = this.$store.state.topHeaderParam[0].route;
				//			console.log(e.target)
				this.changeHeadeText();
			},
			third_jump: function(e) {
				location.hash = this.$store.state.topHeaderParam[2].route;
				this.changeHeadeText();
			},
			changeHeadeText() {
				if(location.hash.indexOf('qrcode') !== -1) {
					this.headerInfo({
							data: [{ //第一个参数
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
								text: "", //文字
								ev: "", //事件
								route: "" //路由
							}]
						})
				}else if(location.hash.indexOf('my') !== -1){
					this.headerInfo({
							data: [{ //第一个参数
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
								route: "/my/qrcode" //路由
							}]
						})
				}
			}
		},
		beforeMount: function() {
			//Dom加载前自动调用
			//	console.log("beforeMount")
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
	
	#topheader {
		width: 100%;
		height: R(100px);
		background-color: #FC6E51;
		box-sizing: border-box;
		padding: 0 R(38px);
		display: flex;
		.item {
			flex: 1;
			height: inherit;
			.href {
				display: block;
				height: inherit;
				width: inherit;
				color: white;
				text-align: center;
				font-size: R(45px);
				line-height: R(100px);
			}
			.iconfont {
				font-size: R(45px);
			}
			.left_icon {
				text-align: left;
			}
			.right_icon {
				text-align: right;
			}
		}
	}
</style>