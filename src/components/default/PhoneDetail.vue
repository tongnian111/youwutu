<template>
	<div id="wrapper" class="phoneDetail">
		<div id="back">
			<router-link to="/phone">
				<i class="iconfont icon-fanhui"></i>
			</router-link>
		</div>
		<div id="contents">
			<div class="con">
				<div id="swiper">
					<div class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="item in imgList">
								<a>
									<img :src="item" />
								</a>
							</div>
						</div>
						<div class="swiper-pagination"></div>
					</div>
				</div>
				<!------------轮播结束---------------->
				<!--<p class="title">{{data.item.title}}</p>-->
				<!--<p class="price">￥{{data.item.nowPrice}}</p>-->
				<!--<div class="desc" v-html="data.desc"></div>-->
			</div>
			<div class="control">

			</div>
		</div>
	</div>
</template>

<script>
	import { Toast, Indicator } from "mint-ui";
	export default {
		name: 'phoneDetail',
		data() {
			return {
				data: {},
				imgList: [],
				title: '',
				price: 0
			}
		},
		methods: {

		},
		beforeMount: function() {

		},
		mounted: function() {
			let _this = this;
			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});
			this.$http.get("/youwutu/getpro/getPhoneDetail", {
				params: {
					id: this.$route.query.id
				}
			}).then(function(res) {
				if(res.body.code === 0) {
					_this.data = res.body.data.showapi_res_body;
					_this.imgList = _this.data.item.imgList.slice(0);
				}
				console.log(_this.data)
				Toast({
					message: res.body.message,
					position: 'middle',
					duration: 3000
				});
				setTimeout(function() {
					new Swiper('.swiper-container', {
						autoplay: 3000, //可选选项，自动滑动
						loop: true,
						autoplayDisableOnInteraction: false,
						pagination: '.swiper-pagination',
					})
				}, 2000);
				Indicator.close();
			})

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
	#wrapper{
		position: relative;		
	}
	#back{
		display: block;
		position: fixed;
		width: R(50px);
		height: R(50px);
		border-radius: 50%;
		background-color: #FC6E51;
		z-index: 1000;
		left: R(20px);
		top:R(30px);
		line-height: R(50px);
		.iconfont{
			position: absolute;
			left: 0;
			top: R(2px);
			font-size: R(40px);
			color: white;
		}
	}
	#contents {
		flex: 1;
		display: flex;
		flex-direction: column;
		.control {
			height: R(120px);
		}
		.con {
			flex: 1;
			overflow-y: auto;
		}
		.title {
			font-size: R(36px);
			color: #434A54;
			margin-top: R(30px);
			text-indent: 1em;
		}
		.price {
			font-size: R(40px);
			color: #FC6E51;
			text-indent: 1em;
			line-height: R(80px);
			border-bottom: R(2px) solid #E6E9ED;
		}
		.desc {
			width: 100% !important;
			* {
				width: 100%;
			}
		}
	}
	
	#swiper {
		height: R(730px);
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
					height: 100%;
				}
			}
		}
	}
</style>