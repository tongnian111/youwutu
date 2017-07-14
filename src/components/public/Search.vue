<template>
	<div id="wrapper" class="default">
		<div id="contents">
			<div id="topheader">
				<div class="item">
					<a class="href left_icon" @click="$router.go(-1)">
						<i class="iconfont icon-fanhui"></i>
					</a>
				</div>
				<div class="item">
					<a class="href">
						<input type="text" v-model="keyword" placeholder="请输入关键字" />
					</a>
				</div>
				<div class="item">
					<!--top_header_param[2].route-->
					<a class="href right_icon">
						<span @click="searchPro">搜索</span>
					</a>
				</div>
			</div>
			<ul class="resultList">
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
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { Toast, Indicator, MessageBox } from "mint-ui";
	export default {
		name: 'default',
		data() {
			return {
				keyword: '',
				list: []
			}
		},
		methods: {
			searchPro: function() {
				Indicator.open({
					text: '搜索中...',
					spinnerType: 'fading-circle'
				});
				let _this = this;
				setTimeout(timeout,2000);
				function timeout() {
					_this.$http.get("/youwutuphp/youwutu/getpro/search", {
						params: {
							keyword: _this.keyword
						}
					}).then(res => {
						console.log(res);
						if(res.body.code === 0) {
							_this.list = res.body.data;
						}
						Toast({
							message: "共搜索到" + _this.list.length + "条",
							position: 'middle',
							duration: 3000
						});
						Indicator.close();
					})
				}
			}
		},
		beforeMount: function() {
			//Dom加载前自动调用
			console.log("beforeMount")
		},
		mounted: function() {
			//Dom加载完成自动调用此方法
			console.log("mounted")
		}
	}
</script>

<style scoped lang="scss">
	@charset "utf-8";
	$ui-width:720px;
	@function R($px) {
		@return $px/$ui-width*7.2rem;
	}
	
	#topheader {
		width: 100%;
		height: R(100px);
		background-color: #FC6E51;
		box-sizing: border-box;
		padding: 0 R(38px);
		display: flex;
		.item {
			flex: 1;
			height: inherit;
			input[type=text] {
				outline: none;
				background: white;
				height: R(60px);
				border: none;
			}
			.href {
				display: block;
				height: inherit;
				width: inherit;
				color: white;
				text-align: center;
				font-size: R(45px);
				line-height: R(100px);
			}
			.iconfont {
				font-size: R(45px);
			}
			.left_icon {
				text-align: left;
			}
			.right_icon {
				text-align: right;
			}
		}
	}
	
	#contents {
		flex: 1;
		display: flex;
		flex-direction: column;
		.resultList {
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
	}
</style>