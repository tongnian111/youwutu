<template>
	<div id="wrapper" class="default">
		<TopHeader :headerParam="headerParams"></TopHeader>
		<div id="contents">
			<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :top-pull-text="topPullText" :bottom-pull-text="bottomPullText" :bottom-all-loaded="allLoaded" ref="loadmore">
			<div id="swiper">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<a>
								<img src="http://119.29.101.67/youwutu/img/default_banner_1.png" />
							</a>
						</div>
						<div class="swiper-slide">
							<a>
								<img src="http://119.29.101.67/youwutu/img/default_banner_2.jpg" />
							</a>
						</div>
						<div class="swiper-slide">
							<a>
								<img src="http://119.29.101.67/youwutu/img/default_banner_3.jpg" />
							</a>
						</div>
					</div>
					<div class="swiper-pagination"></div>
				</div>
			</div>
			<ul class="listNav">
				<li>
					<a href="#/phone">
						<img src="http://119.29.101.67/youwutu/img/shouji.png" />
						<span>手机</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="http://119.29.101.67/youwutu/img/xiangbao.png" />
						<span>箱包</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="http://119.29.101.67/youwutu/img/fuzhuang.png" />
						<span>服装</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="http://119.29.101.67/youwutu/img/jiadian.png" />
						<span>家电</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="http://119.29.101.67/youwutu/img/diannao.png" />
						<span>电脑</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="http://119.29.101.67/youwutu/img/shuma.png" />
						<span>数码</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="http://119.29.101.67/youwutu/img/huwai.png" />
						<span>户外</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="http://119.29.101.67/youwutu/img/quanbu.png" />
						<span>全部</span>
					</a>
				</li>
			</ul>
			<div class="banner">
				<a>
					<img src="http://119.29.101.67/youwutu/img/default_banner_1.png" />
				</a>
			</div>
			<!---折扣--->
			<ul class="discount_list">
				<li>
					<a>
						<img src="http://119.29.101.67/youwutu/img/default_erji_1.png" />
					</a>
					<div class="discount_price">
						3折起
					</div>
				</li>
				<li>
					<a>
						<img src="http://119.29.101.67/youwutu/img/default_yinxiang_1.png" />
					</a>
					<div class="discount_price">
						3折起
					</div>
				</li>
				<li>
					<a>
						<img src="http://119.29.101.67/youwutu/img/default_xiangbao1.png" />
					</a>
					<div class="discount_price">
						3折起
					</div>
				</li>
			</ul>
			<div class="jingxuan">
				<a>
					<img src="http://119.29.101.67/youwutu/img/default_jingxuan_1.png" />
				</a>
			</div>
			<!---精选--->
			<ul class="selected_list">
				<li>
					<a>
						<img src="http://119.29.101.67/youwutu/img/default_wallet_1.png" />
					</a>
					<div class="discount_price">
						￥259.00
					</div>
				</li>
				<li>
					<a>
						<img src="http://119.29.101.67/youwutu/img/default_wallet_2.png" />
					</a>
					<div class="discount_price">
						￥599.00
					</div>
				</li>
				<li>
					<a>
						<img src="http://119.29.101.67/youwutu/img/default_wallet_3.png" />
					</a>
					<div class="discount_price">
						￥899.00
					</div>
				</li>
			</ul>
			</mt-loadmore>
		</div>
		<FooterNav></FooterNav>
	</div>
</template>

<script>
	import { Toast, Indicator } from "mint-ui";
	import { mapGetters, mapActions } from 'vuex';
	import TopHeader from "../../components/public/TopHeader";
	import FooterNav from "../../components/public/FooterNav";
	import Phone from "./Phone";
	//定义一个头部参数
	let topArr = [{ //第一个参数
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
	export default {
		name: 'default',
		components: {
			TopHeader,
			FooterNav,
			Phone
		},
		data() {
			return {
				dataList: [],
				headerParams: topArr, //头部信息参数
				allLoaded: false,
				topPullText: "",
				bottomPullText: ""
			}
		},
		methods: {
			//	...mapActions([
			//  'addtolist',
			//	  ]),addToList:function(){
			//	  		this.addtolist(this.$refs.addtext.value);
			//	  }
			//加载数据
			loadData: function(id = "342568ABB06F403EA40B3E31FFF49DA5") {
				var _this = this;
				this.$http.get('/rightbe/api/system/ishare.do?callback=&id=' + id + '&[object%20Object]&_=1499476098428', {

				}).then(response => {
					// get body data
					//					this.someData = response.body;
					console.log(JSON.parse(response.body.substring(1, response.body.length - 2)))
					let itemData = JSON.parse(response.body.substring(1, response.body.length - 2));
					_this.dataList = _this.dataList.concat(itemData)
				}, response => {
					// error callback
				});
			},
			loadSwiper: function() {
				new Swiper('.swiper-container', {
					autoplay: 3000, //可选选项，自动滑动
					loop: true,
					autoplayDisableOnInteraction: false,
					pagination: '.swiper-pagination',
				})
			},
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
			this.loadData();

		},
		mounted: function() {
			//加载swiper
			this.loadSwiper();
		},
		updated: function() {
			this.loadSwiper();
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
		.banner,
		.jingxuan {
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
		.discount_list,
		.selected_list {
			display: flex;
			margin-top: R(20px);
			li {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				height: R(300px);
				img {
					width: R(220px);
					height: R(220px);
					border: R(2px) solid #E6E9ED;
				}
				div.discount_price {
					line-height: R(64px);
					text-align: center;
					font-size: R(30px);
					color: #FC7154;
				}
			}
		}
	}
</style>