<template>
	<div id="wrapper" class="shopcar">
		<TopHeader :headerParam="headerParams"></TopHeader>
		<div id="contents">	
			<div class="hezi">
				<div class="shanghe" >
					<i class=" iconfont icon-xiayiye"></i>
					<p>收货人：请填写</p>
					<p>请填写收货地址</p>
				</div>
				<div class="cartList" v-if="list.length">
					<img src="//img2.ch999img.com/pic/product/216x216/20170421144123524.jpg">
					<p class="title">Apple iPhone 7 Plus (A1699) 32G 银色</p>
					<div class="count_box">
						<span>购买数量 </span>
						<span class="reduce">-</span>
						<input type="text" v-model="count"></input>
						<span class="add">+</span>
						<span class="price">￥5699.00</span>
					</div>
				</div>
				<div v-else class="kongcart">
					<img src="http://119.29.101.67/youwutu/img/kong.png" />
				</div>
			</div>
		</div>
		<div class="footer">
			<span>共</span>
			<span class="count">2</span>
			<span>件商品   合计</span>
			<span class="price">$796.00</span>
			<span>元</span>
			<a class="calculateMoney">去结算</a>
		</div>
	</div>
</template>

<script>
	import TopHeader from "../../components/public/TopHeader";
	let topArr = [{ //第一个参数
		icon: "icon-fanhui", //iconfont图标
		text: "", //文字
		ev: "", //事件
		route: "/my" //路由
	}, { //第二个参数
		icon: "",
		text: "购物车",
		ev: "",
		route: ""
	}, { //第三个参数
		icon: "", //iconfont图标
		text: "", //文字
		ev: "", //事件
		route: "" //路由
	}];

	export default {
		name: 'shopcar',
		components:{TopHeader},
		data() {
			return {
				headerParams: topArr,
				count:1,
				list:[]
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
		background:#f5f7fa;
		.hezi{
			background:#fff;
			border-bottom: R(1px) solid #e6e9ed;
			.shanghe{
				padding: R(28px) R(32px) R(34px) R(20px); 
				height: R(57px);
				line-height: R(57px);
				i{
					float: right;
				}
				p:nth-of-type(1){
					height: R(26px);
					line-height: R(26px);
					font-size: R(26px);
					margin-bottom: R(11px);
				}
				p:nth-of-type(2){
					height: R(22px);
					line-height: R(22px);
					font-size: R(22px);
					color: #6b737d;
				}
			}
			.kongcart{
				img{
					width: R(500px);
					margin: 0 auto;
				}
			}
			.cartList{
				background: #fff;
				height: R(140px);
				padding: R(21px) R(32px) R(21px) R(20px);
				border-bottom: R(2px) solid #ccc;
				overflow: hidden;
				img{
					height: R(136px);
					width: R(136px);
					border:R(1px) solid #e6e9ed;
					float: left;
					margin-right: R(20px);
				}
				.title{
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2; //文本行数
					overflow: hidden;
				}
				p:nth-of-type(1){
					font-size: R(28px);
					height: R(28px);
					line-height: R(28px);
					margin-top: R(6px);
					margin-bottom: R(56px);
				}
				.count_box{
					color: #757d86;
					height: R(50px);
					line-height: R(50px);
					font-size: R(20px);
					display: flex;
					span{
						display: inline-block;
						height: R(46px);
						line-height: R(46px);
						text-align: center;
					}
					span:nth-of-type(1){
						width: R(200px);
					}
					span[class=reduce],{
						width: R(128px);
						border:R(1px) solid #e6e9ed;
					}
					span[class=add]{
						width: R(128px);
						border:R(1px) solid #e6e9ed;
					}
					span:nth-of-type(4){
						color: #fc6e51;
						border:0;
					}
					input[type=text]{
						width: R(80px);
						height: R(40px);
						text-align: center;
						outline: none;
					}
				}
			}
			.cartList:last-child{
				border-bottom: none;
			}
		}
		
	}
	.footer{
		height: R(100px);
		border-top: R(2px) solid #ccc;
		font-size: R(24px);
		line-height: R(100px);
		padding-left: R(20px);
		background-color: #F5F7FA;
		position: relative;
		span[class]{
			color: #FC6E51;
		}
		.calculateMoney{
			display: inline-block;
			width: R(150px);
			height: R(80px);
			background: #FC6E51;
			text-align: center;
			color: white;
			line-height: R(80px);
			position: absolute;
			right: R(20px);
			top: R(10px);
		}
	}
</style>