<template>
	<div id="topheader">
		<div class="item">
			<router-link :to="headerParam[0].route" class="href left_icon">
				<i class="iconfont" :class="headerParam[0].icon"></i>
			</router-link>
		</div>
		<div class="item">
			<a class="href">
				<span class="title">{{headerParam[1].text}}</span>
			</a>
		</div>
		<div class="item">
			<!--top_header_param[2].route-->
			<router-link :to="headerParam[2].route" class="href right_icon">
				<i class="iconfont" :to="headerParam[0].route" :class="headerParam[2].icon"></i>
				<span>{{headerParam[2].text}}</span>
			</router-link>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	let pathname = '';
	export default {
		name: 'topheader',
		props: { //参数接收
			headerParam: Array //检测参数类型 是数组
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
			])
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