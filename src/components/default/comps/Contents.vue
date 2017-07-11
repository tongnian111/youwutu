<template>
	
</template>

<script>
	import {Toast,Indicator} from "mint-ui";
	export default {
		name: 'integral',
		data() {
			return {
				allLoaded: false,
				topPullText: "",
				bottomPullText: ""
			}
		},
		methods: {
			loadTop: function() {
				console.log("上啦")
				var _this = this;
				this.allLoaded = true;
				_this.allLoaded = false; // 若数据已全部获取完毕
				_this.$refs.loadmore.onBottomLoaded();
				_this.$refs.loadmore.onTopLoaded();
			},
			loadBottom: function() {
				console.log("下拉");
				this.allLoaded = true;
				var _this = this;
				_this.allLoaded = false; // 若数据已全部获取完毕
				_this.$refs.loadmore.onBottomLoaded();
				_this.$refs.loadmore.onTopLoaded();
			}
		},
		beforeMount: function() {
			//Dom加载前自动调用

		},
		mounted: function() {
			//Dom加载完成自动调用此方法
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 3000, //可选选项，自动滑动
				loop: true,
				autoplayDisableOnInteraction: false,
				pagination: '.swiper-pagination',
			})
		}

	}
</script>

<style scoped lang="scss">
	@charset "utf-8";
	$ui-width:720px;
	@function R($px) {
		@return $px/$ui-width*7.2rem;
	}
	
	
</style>