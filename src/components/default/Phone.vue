<template>
	<div id="wrapper" class="default">
		<TopHeader :headerParam="headerParams"></TopHeader>
		<div class="contents">
			<!----筛选条件----->
			<div class="condition">
				<span @click="setActiveIndex(0)" :class="activeIndex==0? 'active':''">最新</span>
				<span @click="setActiveIndex(1)" :class="activeIndex==1? 'active':''">销量</span>
				<span @click="setActiveIndex(2)" :class="activeIndex==2? 'active':''">价格</span>
			</div>
			<ul id="list" class="list">
			  <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :top-pull-text="topPullText" :bottom-pull-text="bottomPullText" :bottom-all-loaded="allLoaded" ref="loadmore">
				<li v-for="(item,index) in list" :data-id="item.proid">
					<router-link :to="'/phonedetail?id='+item.proid">
						<img :src="item.img" />
					</router-link>
					<div class="info">
						<p class="name">{{item.name}}</p>
						<div class="otherInfo">
							<div class="price">
								<span>价格:</span>
								<span>{{item.price}}</span>
							</div>
							<div class="numAndCart">
								<span>已销售</span>
								<span>{{item.xiaoliang}}</span>
								<span>件</span>
								<i @click="addToCart($event)" class="iconfont icon-gouwuche" :data-proid="item.proid" :data-price="item.price.substring(1)"></i>
							</div>
						</div>
					</div>
				</li>
				</mt-loadmore>
			</ul>
		</div>
		<div class="cartList">
			<div>
				您已添加<span>{{cartList.length}}</span>件商品到购物车共
				<span>￥{{totalMoney}}</span>
			</div>
			<a>去购物车</a>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	import { Toast, Indicator,MessageBox} from "mint-ui";
	import TopHeader from "../../components/public/TopHeader";
		//定义一个头部参数
	let topArr = [{ //第一个参数
		icon: "icon-fanhui", //iconfont图标
		text: "", //文字
		ev: "", //事件
		route: "/" //路由
	}, { //第二个参数
		icon: "",
		text: "手机",
		ev: "",
		route: ""
	}, { //第三个参数
		icon: "icon-search", //iconfont图标
		text: "", //文字
		ev: "", //事件
		route: "/search" //路由
	}];
	export default {
		name: 'phone',
		components:{TopHeader},
		data() {
			return {
				list: [],
				activeIndex: 0,
				xiaoliang: [],
				type: 1,
				page: 1,
				headerParams: topArr, //头部信息参数
				allLoaded: false,
				topPullText: "",
				bottomPullText: "",
				cartList:[],
				totalMoney:0
			}
		},
		methods: {
			setActiveIndex: function(index) {
				this.activeIndex = index;
				if(index == 0) {
					this.list.sort(function(a, b) {
						return b.createTime - a.createTime;
					})
				} else if(index == 1) {
					this.list.sort(function(a, b) {
						return b.xiaoliang - a.xiaoliang;
					})
				} else if(index == 2) {
					this.list.sort(function(a, b) {
						return parseFloat(a.price.substring(0)) - parseFloat(b.price.substring(0));
					})
				}
			},
			loadData: function() {
				var _this = this;
				this.allLoaded = true;
				Indicator.open({
					text: '加载中...',
					spinnerType: 'fading-circle'
				});
				this.$http.get('/youwutu/getpro/getProList', {
					params: {
						type: this.type,
						page: this.page
					}
				}).then(response => {
					response = response.body;
					Indicator.close();
					if(response.code === 0) {
						_this.list = _this.list.concat(response.data);
					}
					Toast({
						message: response.message,
						position: 'middle',
						duration: 3000
					});
					_this.allLoaded = false; // 若数据已全部获取完毕
					_this.$refs.loadmore.onBottomLoaded();
					_this.$refs.loadmore.onTopLoaded();
				}, response => {
					// error callback
				});
			},
			loadTop: function() {
				this.loadData();
			},
			loadBottom: function() {
				this.loadData();
			},
			addToCart:function(e){
				//判断是否登录
				if(!this.$cookie.get('uid')){
					let _this = this;
					MessageBox.confirm('您还没有登录，是否立即登录?', '提示').then(action => {
						if(action) {
							_this.$router.push('/login');
						}
					}).catch(err => {
						
					})
					return;
				}
				let proid = e.target.getAttribute('data-proid');
				//添加到数据库中
				this.$http.post('/youwutu/cart/insertToCart',{proid:proid}).then(res=>{
					Toast({
						message: res.body.message,
						position: 'middle',
						duration: 3000
					});
				})
				let price = e.target.getAttribute('data-price');
				//判断是否存在
				let  len = this.cartList.length;
				for (let i=0;i<len;i++) {
					if(this.cartList[i].proid == proid){
						this.cartList[i].num = this.cartList[i].num+1;
						return;
					}
				}
				this.cartList.push({proid:proid,num:1,price:price});
			}
		},
		beforeMount: function() {
			//Dom加载前自动调用
			var _this = this;
			
		},
		mounted: function() {
			//Dom加载完成自动调用此方法
			console.log("mounted");
			this.loadData();
			
		},
		destoryed: function() {
			//console.log("卸载手机页面")
		},watch:{
			cartList: {
				handler: function(newVal) {
					let item = 0;
					for(var i = 0; i < newVal.length; i++) {
						item+=parseFloat(newVal[i].price)*parseFloat(newVal[i].num)
					}
					this.totalMoney = item.toFixed(2);
				},
				deep: true
			}
		}
	}
</script>

<style scoped lang="scss">
	@charset "utf-8";
	$ui-width:720px;
	@function R($px) {
		@return $px/$ui-width*7.2rem;
	}
	
	.contents {
		flex: 1;
		display: flex;
		flex-direction: column;
		.condition {
			width: 100%;
			height: R(100px);
			display: flex;
			span {
				flex: 1;
				text-align: center;
				line-height: R(100px);
				font-size: R(30px);
			}
			span.active {
				color: #FC6E51;
			}
		}
	}
	
	.list {
		flex: 1;
		overflow-y: auto;
		li {
			display: flex;
			height: R(280px);
			border-top: R(2px) solid #ccc;
			box-sizing: border-box;
			padding: R(20px);
			img {
				width: R(237px);
				height: R(237px);
				border: R(2px) solid #ccc;
			}
			.info {
				flex: 1;
				display: flex;
				flex-direction: column;
				.name {
					font-size: R(30px);
					width: 100%;
					height: R(118px);
					box-sizing: border-box;
					padding: 0 R(10px);
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 3; //文本行数
					overflow: hidden;
				}
				.otherInfo {
					width: 100%;
					flex: 1;
					padding-top: R(20px);
					.price {
						font-size: R(35px);
						span:nth-child(2) {
							color: #FC775C;
						}
					}
					.numAndCart {
						width: 100%;
						position: relative;
						font-size: R(24px);
						span:nth-child(2) {
							color: #FC775C;
						}
						.iconfont {
							font-size: R(60px);
							position: absolute;
							color: #FC775C;
							right: R(20px);
							bottom: R(0px);
						}
					}
				}
			}
		}
	}
	.cartList{
		width: 100%;
		height: R(100px);
		border-top: R(2px) solid #ccc;
		display: flex;
		div{
			flex: 1;
			font-size: R(20px);
			height: 100%;
			line-height: R(100px);
			text-indent: 1em;
			span{
				color: #ED5565;
				font-size: R(30px);
			}
		}
		a{
			display: inline-block;
			width: R(138px);
			height: R(80px);
			text-align: center;
			line-height: R(80px);
			color: white;
			background-color: #ED5565;
			font-size: R(32px);
			margin-top: R(10px);
			margin-right: R(20px);
		}
	}
	/*.mint-loadmore-top,.mint-loadmore-bottom{
		span{
			font-size: R(36px) !important;
		}
	}*/
</style>