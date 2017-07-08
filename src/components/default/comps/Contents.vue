<template>

	<div id="contents">
		<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :top-pull-text="topPullText" :bottom-pull-text="bottomPullText" :bottom-all-loaded="allLoaded" ref="loadmore">
			<div id="swiper">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<a>
								<img src="/static/img/default_banner_1.png" />
							</a>
						</div>
						<div class="swiper-slide">
							<a>
								<img src="/static/img/default_banner_2.jpg" />
							</a>
						</div>
						<div class="swiper-slide">
							<a>
								<img src="/static/img/default_banner_3.jpg" />
							</a>
						</div>
					</div>
					<div class="swiper-pagination"></div>
				</div>
			</div>
			<ul class="listNav">
				<li>
					<a href="">
						<img src="/static/img/huwai.png" />
						<span>户外</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="/static/img/xiangbao.png" />
						<span>箱包</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="/static/img/fuzhuang.png" />
						<span>服装</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="/static/img/jiadian.png" />
						<span>家电</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="/static/img/diannao.png" />
						<span>电脑</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="/static/img/shuma.png" />
						<span>数码</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="/static/img/shouji.png" />
						<span>手机</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="/static/img/quanbu.png" />
						<span>全部</span>
					</a>
				</li>
			</ul>
			<div class="banner">
				<a>
					<img src="/static/img/default_banner_1.png" />
				</a>
			</div>
		</mt-loadmore>
	</div>

</template>

<script>
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
	
	#contents {
		flex: 1;
		overflow-y: auto;
		#swiper {
			height: R(322px);
			width: 100%;
			.swiper-container {
				width: 100%;
				height: 100%;
				a {
					display: block;
					width: 100%;
					height: 100%;
					img {
						width: 100%;
					}
				}
			}
		}
		.listNav {
			display: flex;
			width: 100%;
			flex-wrap: wrap;
			margin-top: R(20px);
			li {
				width: 25%;
				height: R(135px);
				text-align: center;
				display: flex;
				justify-content: center;
				margin-bottom: R(24px);
				a {
					width: R(102px);
					height: 100%;
					display: flex;
					flex-direction: column;
					img {
						width: 100%;
					}
					span {
						font-size: R(30px);
					}
				}
			}
		}
		.banner {
			width: 100%;
			height: R(362px);
			a {
				display: block;
				width: 100%;
				height: 100%;
				img {
					width: 100%;
				}
			}
		}
	}
</style>