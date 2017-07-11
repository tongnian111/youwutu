<template>
	<div id="wrapper" class="tiyan">
		<TopHeader :headerParam="headerParams"></TopHeader>
		<div id="contents">
				体验内容页面区域
		</div>
		<!--<FooterNav></FooterNav>-->
	</div>
</template>

<script>
	import { Toast, Indicator } from "mint-ui";
	import { mapGetters, mapActions } from 'vuex';
	import TopHeader from "../../components/public/TopHeader";
	//如果有页脚导航需要添加   <FooterNav></FooterNav>
	import FooterNav from "../../components/public/FooterNav";
	//定义一个头部参数
	let topArr = [{ //第一个参数
		icon: "icon-fanhui", //iconfont图标
		text: "", //文字
		ev: "", //事件
		route: "/integral" //路由
	}, { //第二个参数
		icon: "",
		text: "请修改名称",
		ev: "",
		route: ""
	}, { //第三个参数
		icon: "", //iconfont图标
		text: "", //文字
		ev: "", //事件
		route: "" //路由
	}];
	export default {
		name: 'tiyan',
		components:{TopHeader,FooterNav},
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
	}
</style>