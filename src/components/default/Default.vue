<template>
	<div id="wrapper" class="default">
		<TopHeader :headerParam="headerParams"></TopHeader>
		<div id="contents">
			<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :top-pull-text="topPullText" :bottom-pull-text="bottomPullText" :bottom-all-loaded="allLoaded" ref="loadmore">
			<div id="swiper">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div v-for="item in dataList" v-if="item.type==1" class="swiper-slide">
							<a>
								<img :src="'http://119.29.101.67/youwutu/img/'+item.imgsrc" />
							</a>
						</div>
					</div>
					<div class="swiper-pagination"></div>
				</div>
			</div>
			<ul class="listNav">
				<li v-for="item in dataList" v-if="item.type==2">
					<router-link :to="item.router">
						<img :src="'http://119.29.101.67/youwutu/img/'+item.imgsrc" />
						<span>{{item.name}}</span>
					</router-link>
				</li>
			</ul>
			<div class="banner">
				<a v-for="(item,index) in bannder" v-if="index==0">
					<img :src="'http://119.29.101.67/youwutu/img/'+item.imgsrc" />
				</a>
			</div>
			<!---折扣--->
			<ul class="discount_list">
				<li v-for="(item,index) in zhekou" v-if="index < 3">
					<a>
						<img :src="'http://119.29.101.67/youwutu/img/'+item.imgsrc" />
					</a>
					<div class="discount_price">
						{{item.price}}
					</div>
				</li>
			</ul>
			<div class="jingxuan">
				<a v-for="(item,index) in bannder" v-if="index==1">
					<img :src="'http://119.29.101.67/youwutu/img/'+item.imgsrc" />
				</a>
			</div>
			<!---精选--->
			<ul class="selected_list">
				<li v-for="(item,index) in zhekou" v-if="index >= 3 && index <6">
					<a>
						<img :src="'http://119.29.101.67/youwutu/img/'+item.imgsrc" />
					</a>
					<div class="discount_price">
						{{item.price}}
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
				bannder:[],
				zhekou:[],
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
				Indicator.open({
					text: '加载中...',
					spinnerType: 'fading-circle'
				});
				var _this = this;
				this.$http.get('/youwutu/shouye/getDefaultInfo').then(res => {
					if(res.body.code === 0){
						_this.dataList = res.body.data;
						//bannder
						_this.bannder.splice(0);
						//折扣
						_this.zhekou.splice(0);
						for (var i=0;i<res.body.data.length;i++) {
							if(res.body.data[i].type == 3){
								_this.bannder.push(res.body.data[i])
							}
							if(res.body.data[i].type == 4){
								_this.zhekou.push(res.body.data[i])
							}
						}
						
					}
					Toast({
						message: res.body.message,
						position: 'bottom',
						duration: 3000
					});
//					console.log(res);
					Indicator.close();
				}, response => {
					Indicator.close();
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