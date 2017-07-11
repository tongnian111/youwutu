<template>
	<div class="phoneDetail">
		<div class="con">
			<!--<div id="swiper">
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
			</div>-->
			<!------------轮播结束---------------->
			<!--<p class="title">{{data.item.title}}</p>-->
			<!--<p class="price">￥{{data.item.nowPrice}}</p>-->
			<!--<div class="desc" v-html="data.desc"></div>-->
		</div>
		<div class="control">

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
				imgList:[],
				title:'',
				price:0
			}
		},
		methods: {

		},
		beforeMount: function() {
			
		},
		mounted: function() {
			let _this = this;
			this.$http.get("/youwutu/getpro/getPhoneDetail", {
				params: {
					id: this.$route.query.id
				}
			}).then(function(res) {
				if(res.body.code === 0) {
					_this.data = res.body.data.showapi_res_body;
					_this.imgList = _this.data.item.imgList.slice(0,3);
				}
				console.log(_this.data)
				Toast({
					message: res.body.message,
					position: 'middle',
					duration: 3000
				});
					
			})

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
	
	.phoneDetail {
		flex: 1;
		display: flex;
		flex-direction: column;
		.control {
			height: R(120px);
			background: red;
		}
		.con {
			flex: 1;
			overflow-y: auto;
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
	.desc{
		 width: 100% !important;
			*{
				 width: 100%;
			}
	}
</style>