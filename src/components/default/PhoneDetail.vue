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
							<div class="swiper-slide" v-for="(item,index) in imgList" :key="index" v-if="index < 10">
								<a>
									<img :src="item" />
								</a>
							</div>
						</div>
						<div class="swiper-pagination"></div>
					</div>
				</div>
				<!------------轮播结束---------------->
				<p class="title">{{title}}</p>
				<p class="price">￥{{price}}</p>
				<!--<div class="desc" v-html="data.desc"></div>-->
				<ul class="desc">
					<li><span>商品图文详情（建议在wifi下查看）</span><i class="iconfont icon-xiayiye1"></i></li>
					<li><span>商品小视频（建议在wifi下查看）</span><i class="iconfont icon-xiayiye1"></i></li>
					<li><span>商品晒单(1)（建议在wifi下查看）</span><i class="iconfont icon-xiayiye1"></i></li>
					<li><span>商品评论(1)（建议在wifi下查看）</span><i class="iconfont icon-xiayiye1"></i></li>
					<li><span>联系客服</span><i class="iconfont icon-xiayiye1"></i></li>
				</ul>
			</div>
			<div class="control">
				<span>立即购买</span>
				<span @click="addToCart">加入购物车</span>
				<div id="cartList">
					<div>
						<a href="#/cart">
							<i class="iconfont icon-gouwuche"></i>
						</a>
					</div>
					<a class="count">{{cartList.length}}</a>
				</div>
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
				price:0,
				imgList: [],
				title: '',
				price: 0,
				cartList:[],
				proid:0
			}
		},
		methods: {
			addToCart:function(){
				this.$http.post('/youwutu/cart/insertToCart',{proid:this.proid}).then(res=>{
					Toast({
						message: res.body.message,
						position: 'middle',
						duration: 3000
					});
				})
			}
		},
		beforeMount: function() {
			var _this = this;
			this.$http.get("/youwutu/cart/getCount").then(res=>{
//				console.log(res);
				_this.cartList = res.body.data;
//				console.log(_this.cartList)
			})
			
		},
		mounted: function() {
			this.proid = this.$route.query.id;
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
					_this.price = res.body.data.showapi_res_body.item.nowPrice;
					_this.title =  res.body.data.showapi_res_body.item.title;
					_this.imgList = res.body.data.showapi_res_body.item.imgList.slice(0);
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
	
	#wrapper {
		position: relative;
	}
	
	#back {
		display: block;
		position: fixed;
		width: R(50px);
		height: R(50px);
		border-radius: 50%;
		background-color: #FC6E51;
		z-index: 1000;
		left: R(20px);
		top: R(30px);
		line-height: R(50px);
		.iconfont {
			position: absolute;
			left: 0;
			top: R(2px);
			font-size: R(40px);
			color: white;
		}
	}
	
	#contents {
		height: 100%;
		display: flex;
		flex-direction: column;
		//操作部分
		.control {
			height: R(110px);
			display: flex;
			overflow: hidden;
			span{
				display: inline-block;
				font-size: R(30px);
				height: R(100px);
				width: R(280px);
				line-height: R(100px);
				text-align: center;
				color: white;
				margin-top: R(10px);
			}
			span:first-child{
				background-color: #FC6E51;
				margin-right: R(20px);
				margin-left: R(20px);
			}
			span:nth-of-type(2){
				background-color: #48CFAD;
			}
			#cartList{
				width: R(100px);
				height: R(100px);
				position: relative;
				left: R(10px);
				
				.iconfont{
					font-size: R(80px);
					color: #EC6B51;
				}
				.count{
					display: block;
					position: absolute;
					width: R(40px);
					height: R(40px);
					border-radius: 50%;
					font-size: R(30px);
					text-align: center;
					right: 0;
					top: 0;
					background: #ED5565;
					color: white;
					line-height: R(40px);
				}
			}
		}
		.con {
			flex: 1;
			overflow-y: auto;
			.desc{
				li{
					padding:0 R(20px);
					border-bottom:R(2px) solid #f5f7fa;
					height: R(80px);
					line-height: R(80px);
					font-size: R(26px);
					display: flex;
					justify-content: space-between;
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