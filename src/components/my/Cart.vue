<template>
	<div id="wrapper" class="shopcar">
		<TopHeader :headerParam="headerParams"></TopHeader>
		<div id="contents">
			<!---收获地址---->
			<div class="address">
				<i class=" iconfont icon-xiayiye"></i>
				<p>收货人：请填写</p>
				<p>请填写收货地址</p>
			</div>
			<div class="selectAll">
				<label>
					<input type="checkbox" v-model="selectAll" />全选
				</label>
				<mt-button size="small" class="delAll" @click="delAll" type="danger">删除选中</mt-button>
			</div>
			<div class="cartList" v-for="(item,index) in list" v-if="list.length">
				<div class="checkbox">
					<input type="checkbox" v-model="checkList[index]" />
				</div>
				<a class="img" :href="'#/phonedetail?id='+item.proid">
					<img :src="item.img">
				</a>
				<div class="con">
					<p class="title">{{item.name}}</p>
					<div class="count_box">
						<span>数量:</span>
						<span class="reduce" @click="reduce($event)" :data-proid="item.proid" :data-index="index">-</span>
						<input type="number" min="1" v-model="list[index].count"></input>
						<span class="add" @click="add($event)" :data-proid="item.proid" :data-index="index">+</span>
						<span class="price">{{item.price}}</span>
						<a class="del" @click="del($event)" :data-proid="item.proid" :data-index="index">删除</a>
					</div>
				</div>
			</div>
			<div v-else class="kongcart">
				<img src="http://119.29.101.67/youwutu/img/kong.png" />
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
	import { Toast, Indicator, MessageBox } from "mint-ui";

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
		components: {
			TopHeader
		},
		data() {
			return {
				headerParams: topArr,
				list: [],
				totalMoney: 0,
				checkList: [],
				selectAll: false
			}
		},
		methods: {
			updateCart: function(type, index, proid) {
				//添加数量操作
				if(type === 1) {
					this.list[index].count += 1
				}
				//减小操作
				if(type === -1) {
					if(this.list[index].count <= 1) {
						Toast({
							message: "最少为1件哦~~~",
							position: 'middle',
							duration: 3000
						});
						return;
					}
					this.list[index].count -= 1
				}
				this.$http.post("/youwutuphp/youwutu/cart/insertToCart", {
					proid: proid,
					count: this.list[index].count,
					type: 'update'
				}).then(res => {
					if(res.body.code !== 0) {
						Toast({
							message: "添加失败！",
							position: 'middle',
							duration: 3000
						});
					}
				})
			},
			reduce: function(e) {
				this.updateCart(-1, e.target.getAttribute('data-index'), e.target.getAttribute('data-proid'))
			},
			add: function(e) {
				this.updateCart(1, e.target.getAttribute('data-index'), e.target.getAttribute('data-proid'))
			},
			del: function(e) {
				this.executeDelete(e.target.getAttribute('data-proid'));
			},delAll:function(){
				let proidstr = '';
				for(var i=0;i<this.checkList.length;i++){
					if(this.checkList[i]){
						proidstr+=",'"+this.list[i].proid+"'";
					}
				}
				this.executeDelete(proidstr.substring(1));
			},executeDelete:function(proidstr){
				//第一个参数是删除当前的索引值为多个，第二个参数是proid字符串为多个逗号隔开
				var _this = this;
				this.$http.post("/youwutuphp/youwutu/cart/insertToCart", {
					proidstr: proidstr,//用逗号隔开的字符串
					count: 0,
					type: 'del'
				}).then(res => {
					if(res.body.code === 0) {
						let proidArr = proidstr.split(',');
						for (var i = 0; i < _this.list.length; i++) {
							if(proidstr.indexOf(_this.list[i].proid) != -1){
								_this.list.splice(i,1);
								i--;
							}
						}
						
						_this.checkList.splice(0);
						for (var i = 0; i < _this.list.length; i++) {
							_this.checkList.push(false);
						}
					}
					Toast({
						message: res.body.message,
						position: 'middle',
						duration: 3000
					});
				})
			}
		},
		beforeMount: function() {
			//Dom加载前自动调用
			var _this = this;
			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});
			this.$http.get("/youwutuphp/youwutu/cart/getCartList").then(res => {
				//				console.log(res)
				if(res.body.code === 0) {
					_this.list = res.body.data;
					for(var i = 0; i < _this.list.length; i++) {
						_this.checkList[i] = false;
					}
				}else{
					Toast({
						message: res.body.message,
						position: 'middle',
						duration: 3000
					});
				}
				Indicator.close();
			})
		},
		mounted: function() {
			//Dom加载完成自动调用此方法
		},
		watch: {
			list: {
				handler: function(newVal) {
					let item = 0;
					for(var i = 0; i < newVal.length; i++) {
						item += parseFloat(newVal[i].price.replace("￥", '')) * parseFloat(newVal[i].count)
					}
					this.totalMoney = item.toFixed(2);
				},
				deep: true
			},
			checkList: function(newVal) {
				for(var i=0;i<newVal.length;i++){
					if(!newVal[i]){
						this.selectAll = false;
						return;
					}
				}
				this.selectAll = true;
			},selectAll:function(newVal){
				for(var i=0;i<this.checkList.length;i++){
					this.checkList.splice(i,1,newVal);
				}
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
		background: #f5f7fa;
		.address {
			padding: R(28px) R(32px) R(34px) R(20px);
			height: R(57px);
			line-height: R(57px);
			i {
				float: right;
			}
			p:nth-of-type(1) {
				height: R(26px);
				line-height: R(26px);
				font-size: R(26px);
				margin-bottom: R(11px);
			}
			p:nth-of-type(2) {
				height: R(22px);
				line-height: R(22px);
				font-size: R(22px);
				color: #6b737d;
			}
		}
		.selectAll {
			font-size: R(32px);
			margin-left: R(20px);
		}
		.kongcart {
			img {
				width: R(500px);
				margin: 0 auto;
			}
		}
		.cartList {
			background: #fff;
			height: R(140px);
			padding: R(21px) R(32px) R(21px) R(20px);
			border-bottom: R(2px) solid #ccc;
			width: 100%;
			display: flex;
			input[type=checkbox]{
				margin-right: R(20px);
			}
			.img {
				img{
					height: R(136px);
					width: R(136px);
					border: R(1px) solid #e6e9ed;
					float: left;
					margin-right: R(20px);
				}
			}
			.con {
				flex: 1;
				.title {
					font-size: R(28px);
					height: R(28px);
					line-height: R(28px);
					margin-top: R(6px);
					margin-bottom: R(56px);
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2; //文本行数
					overflow: hidden;
				}
				.count_box {
					color: #757d86;
					height: R(50px);
					line-height: R(50px);
					font-size: R(20px);
					display: flex;
					span {
						display: inline-block;
						height: R(46px);
						line-height: R(46px);
						text-align: center;
					}
					span[class=reduce],
					{
						width: R(48px);
						border: R(1px) solid #e6e9ed;
					}
					span[class=add] {
						width: R(48px);
						border: R(1px) solid #e6e9ed;
					}
					span:nth-of-type(4) {
						color: #fc6e51;
						border: 0;
					}
					input[type=number] {
						width: R(80px);
						height: R(40px);
						text-align: center;
						outline: none;
					}
					.del {
						white-space: nowrap;
						padding: R(5px) R(10px);
						background-color: rgba(255, 0, 0, .5);
						line-height: R(40px);
						color: white;
						border-radius: R(5px);
						margin-left: R(10px);
					}
				}
			}
		}
		.cartList:last-child {
			border-bottom: none;
		}
	}
	
	.footer {
		height: R(100px);
		border-top: R(2px) solid #ccc;
		font-size: R(24px);
		line-height: R(100px);
		padding-left: R(20px);
		background-color: #F5F7FA;
		position: relative;
		span[class] {
			color: #FC6E51;
		}
		.calculateMoney {
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