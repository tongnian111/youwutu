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
				<div class="cartList" v-for="(item,index) in list" v-if="list.length">
					<a :href="'#/phonedetail?id='+item.proid">
						<img :src="item.img">
					</a>
					<p class="title">{{item.name}}</p>
					<div class="count_box">
						<span>购买数量 </span>
						<span class="reduce" @click="reduce($event)" :data-proid = "item.proid" :data-index="index">-</span>
						<input type="number" min="1" v-model="list[index].count"></input>
						<span class="add" @click="add($event)" :data-proid = "item.proid" :data-index="index">+</span>
						<span class="price">{{item.price}}</span>
					</div>
				</div>
				<div v-else class="kongcart">
					<img src="http://119.29.101.67/youwutu/img/kong.png" />
				</div>
			</div>
		</div>
		<div class="footer">
			<span>共</span>
			<span class="count">{{list.length}}</span>
			<span>件商品   合计</span>
			<span class="price">{{totalMoney}}</span>
			<span>元</span>
			<a class="calculateMoney">去结算</a>
		</div>
	</div>
</template>

<script>
	import TopHeader from "../../components/public/TopHeader";
	import { Toast, Indicator,MessageBox} from "mint-ui";
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
				list:[],
				totalMoney:0
			}
		},
		methods: {
			updateCart:function(type,index,proid){
				//添加数量操作
				if(type === 1){
					this.list[index].count += 1
				}
				//减小操作
				if(type === -1){
					if(this.list[index].count <=1){
						Toast({
							message: "最少为1件哦~~~",
							position: 'middle',
							duration: 3000
						});
						return;
					}
					this.list[index].count -= 1
				}
				this.$http.post("/youwutuphp/youwutu/cart/insertToCart",{proid:proid,count:this.list[index].count,type:'update'}).then(res=>{
					if(res.body.code !==0){
						Toast({
							message: "添加失败！",
							position: 'middle',
							duration: 3000
						});
					}
				})
			},reduce:function(e){
				this.updateCart(-1,e.target.getAttribute('data-index'),e.target.getAttribute('data-proid'))
			},add:function(e){
				this.updateCart(1,e.target.getAttribute('data-index'),e.target.getAttribute('data-proid'))
			}
		},
		beforeMount: function() {
			//Dom加载前自动调用
			var _this = this;
			this.$http.get("/youwutuphp/youwutu/cart/getCartList").then(res=>{
//				console.log(res)
				if(res.body.code === 0){
					_this.list = res.body.data
				}
				Toast({
					message: res.body.message,
					position: 'middle',
					duration: 3000
				});
			})
		},
		mounted: function() {
			//Dom加载完成自动调用此方法

		},watch:{
			list: {
				handler: function(newVal) {
					let item = 0;
					for(var i = 0; i < newVal.length; i++) {
						item+=parseFloat(newVal[i].price.replace("￥",''))*parseFloat(newVal[i].count)
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
					input[type=number]{
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