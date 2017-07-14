<template>
	<div id="wrapper" class="jifen">
		<TopHeader :headerParam="headerParams"></TopHeader>
		<div id="contents">
			<div class="main">
				<ul class="ul1">
					<li>
						<a href="javascript:;" class="collection-item" v-for="listName in list" @click="selected(listName)" :class="activeName == listName.name? 'active':''">{{listName.name}}</a>
					</li>

				</ul>
				<ul class="ul2">
					<li v-for="item in proList">
						<div>
							<img :src="item.img">
						</div>
						<div class="div2">
							<div class="div3">
								<p class="pp">{{item.name}}</p>
								<p>{{item.price}}元/台</p>
								<mt-progress :value="80" :bar-height="5" style="top:-3px;margin:0;padding:0" class="tiao"></mt-progress>
							</div>
							<div class="div4">
								<i class="iconfont icon-gouwuche"></i>
							</div>

						</div>
					</li>
				</ul>
			</div>
		</div>
		<!--<FooterNav></FooterNav>-->
	</div>
</template>

<script>
	import { Toast, Indicator } from "mint-ui";
	import { mapGetters, mapActions } from 'vuex';
	import TopHeader from "../../components/public/TopHeader";
	//如果有页脚导航需要添加   <FooterNav></FooterNav>
	import FooterNav from "../../components/public/FooterNav";
	//定义一个头部参数
	let topArr = [{ //第一个参数
		icon: "icon-fanhui", //iconfont图标
		text: "", //文字
		ev: "", //事件
		route: "/integral" //路由
	}, { //第二个参数
		icon: "",
		text: "积分区",
		ev: "",
		route: ""
	}, { //第三个参数
		icon: "", //iconfont图标
		text: "", //文字
		ev: "", //事件
		route: "" //路由
	}];

	let slideNav = [{
			"name": "所有",
			"type": 0
		},
		{
			"name": "其他",
			"type": 0
		},
		{
			"name": "手机",
			"type": 1
		},
		{
			"name": "配件",
			"type": 0
		},
		{
			"name": "虚拟",
			"type": 0
		},
		{
			"name": "箱包",
			"type": 0
		},
		{
			"name": "户外",
			"type": 0
		},
		{
			"name": "生活",
			"type": 0
		},
		{
			"name": "饰品",
			"type": 0
		},
		{
			"name": "美妆",
			"type": 0
		},
		{
			"name": "数码",
			"type": 0
		},
		{
			"name": "护理",
			"type": 0
		},
		{
			"name": "电脑",
			"type": 0
		},
		{
			"name": "汽车",
			"type": 0
		},
		{
			"name": "飞机",
			"type": 0
		},
		{
			"name": "火箭",
			"type": 0
		},
		{
			"name": "大炮",
			"type": 0
		},
	];

	export default {
		name: 'jifen',
		components: {
			TopHeader,
			FooterNav
		},
		data() {
			return {
				headerParams: topArr, //头部信息参数
				list: slideNav,
				activeName: {},
				type: 1,
				page: 1,
				proList: []
			}
		},
		methods: {
			getData: function() {
				
				this.$http.get('/youwutuphp/youwutu/getpro/getProList', {
					params: {
						type: this.type,
						page: this.page
					}
				}).then(response => {
					if(response.body.code === 0) {
						this.proList = this.proList.concat(response.body.data)
					} else {
						this.proList = []
					}
					Toast({
						message: response.body.message,
						position: 'middle',
						duration: 3000
					});
				}, response => {
					
				});
			},
			selected: function(listName) {
				this.activeName = listName.name;
				this.type = listName.type;
				this.page = 1;
				this.getData();
			}
		},
		beforeMount: function() {
			//Dom加载前自动调用

		},
		mounted: function() {
			//Dom加载完成自动调用此方法
			this.getData()
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
		overflow-y: auto;
		background: #f5f7fa;
		height: 100%;
		.main {
			display: flex;
			height: 100%;
			.ul1 {
				overflow-x: auto;
				width: R(160px);
				height: 100%;
				background: #fff;
				margin-right: R(20px);
				display: flex;
				flex-direction: column;
				li {
					width: R(160px);
					height: R(80px);
					font-size: R(22px);
					text-align: center;
					line-height: R(80px);
					background: #fff;
					flex: 1;
					a {
						display: block;
						width: R(160px);
						height: R(80px);
						font-size: R(22px);
						border-bottom: 1px solid #ccc;
						background: #fff;
					}
					a.active {
						color: red
					}
				}
			}
			.ul2 {
				width: R(540px);
				height: 100%;
				overflow-x: auto;
				li {
					width: 100%;
					height: R(240px);
					border-bottom: 2px solid #ccc;
					overflow: hidden;
					display: flex;
					font-size: R(20px);
					img {
						width: R(200px);
						margin-top: R(20px);
						margin-right: R(20px);
					}
					.div2 {
						display: flex;
					}
					.div3 {
						display: flex;
						flex-direction: column;
						width: 100%;
						.pp {
							margin-top: R(20px);
							font-size: R(20px);
							margin-bottom: R(25px);
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 3; //文本行数
							overflow: hidden;
							width: 100%;
						}
						.mt-progress-content {
							background: #f60 !important;
						}
					}
					.div4 {
						margin-top: R(100px);
						margin-left: R(36px);
						overflow: hidden;
						.iconfont{
							font-size: R(60px);
							position: relative;
						}
						.p2 {
							/*     margin-bottom: R(30px);*/
							color: #64d6b9;
						}
					}
				}
			}
		}
	}
</style>