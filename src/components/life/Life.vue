<template>
	<div id="wrapper" class="life">
		<TopHeader :headerParam="headerParams"></TopHeader>
		<div id="contents">
			<div class="shangd">
				<ul id="yipai">
					<li @click="tar(0)" :class="activeIndex==0? 'active':''">推荐</li>
					<li @click="tar(1)" :class="activeIndex==1? 'active':''">美景</li>
					<li @click="tar(2)" :class="activeIndex==2? 'active':''">美食</li>
					<li @click="tar(3)" :class="activeIndex==3? 'active':''">视频</li>
					<li @click="tar(4)" :class="activeIndex==4? 'active':''">发布</li>
				</ul>
			</div>
			<div class="zhong">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<a>
								<img src="http://119.29.101.67/youwutu/img/my_ban_1.jpg" />
							</a>
						</div>
						<div class="swiper-slide">
							<a>
								<img src="http://119.29.101.67/youwutu/img/my_ban_2.jpg" />
							</a>
						</div>
						<div class="swiper-slide">
							<a>
								<img src="http://119.29.101.67/youwutu/img/my_ban_3.jpg" />
							</a>
						</div>
					</div>
				</div>
				<div class="kuang" v-for="(item,index) in list">
					<div class="ss">
						<img :src="userInfo[index].header" :data-uid="userInfo[index].userid">
						<p>{{userInfo[index].nickname}}</p>
						<p>{{userInfo[index].time}}</p>
					</div>
					<div class="xx">
						<img :src="headInfo[index].surl">
						<p>{{headInfo[index].title}}</p>
						<p class="content">{{item[0].content}}</p>
						<ul class="xiakuang">
							<li class="l">常识</li>
							<li class="r"><i class="iconfont icon-jifen"></i>{{headInfo[index].ccount}}</li>
							<li class="r"><i class="iconfont icon-shoucangkong_"></i>{{headInfo[index].lcount}}</li>
							<li class="r"><i class="iconfont icon-xiaoxi1"></i>0</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<FooterNav></FooterNav>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	import TopHeader from "../../components/public/TopHeader";
	import FooterNav from "../../components/public/FooterNav";
	import { Toast, Indicator } from "mint-ui";
	//定义一个头部参数
	let topArr = [{ //第一个参数
		icon: "icon-search", //iconfont图标
		text: "", //文字
		ev: "", //事件
		route: "/search" //路由
	}, { //第二个参数
		icon: "",
		text: "生活",
		ev: "",
		route: ""
	}, { //第三个参数
		icon: "icon-fabu", //iconfont图标
		text: "", //文字
		ev: "", //事件
		route: "/release" //路由
	}];
	export default {
		name: 'life',
		components: {
			TopHeader,
			FooterNav
		},
		data() {
			return {
				headerParams: topArr, //头部信息参数
				activeIndex: 0,
				headInfo: [],
				userInfo: [],
				list: []
			}
		},
		methods: {
			tar: function(index) {
				this.activeIndex = index;
				this.getData(index+1)
			},
			getData: function(page=1) {
				Indicator.open({
					text: '加载中...',
					spinnerType: 'fading-circle'
				});
				var that = this;
				this.$http.get('/youwutu/life/getLifeData',{params:{page:page}}).then(response => {
					//					console.log(response);
					let data = response.body.data;
					let len = data.length;
					that.headInfo.splice(0);
					that.userInfo.splice(0);
					that.list.splice(0);
					for(var i = 0; i < len; i++) {
						that.headInfo.push(data[i][0]);
						that.userInfo.push(data[i][1]);
						that.list.push(data[i].splice(3));
					}
//					console.log(that.list)
					Indicator.close();
					Toast({
						message: response.body.message,
						position: 'middle',
						duration: 3000
					});
				}, response => {
					Indicator.close();
				});
			}
		},
		beforeMount: function() { //Dom加载前自动调用
			this.getData();
		},
		mounted: function() {
			//Dom加载完成自动调用此方法
			new Swiper('.swiper-container', {
				autoplay: 3000, //可选选项，自动滑动
				loop: true,
				autoplayDisableOnInteraction: false
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
	
	#contents {
		flex: 1;
		display: flex;
		flex-direction: column;
		.shangd {
			width: 100%;
			height: R(82px);
			line-height: R(76px);
			ul {
				display: flex;
				height: R(82px);
				line-height: R(76px);
				justify-content: space-around;
				li {
					font-size: R(24px);
					padding: 0 R(25px);
				}
				li.active {
					color: #fc6e51;
					border-bottom: R(2px) solid #fc6e51;
				}
			}
		}
		.zhong {
			flex: 1;
			overflow-y: auto;
			.swiper-container {
				height: R(323px);
				width: 100%;
				a {
					display: block;
					width: 100%;
					height: 100%;
					img {
						width: 100%;
					}
				}
			}
			.kuang {
				height: R(790px);
				padding: 0 R(20px);
				border-bottom: R(2px) solid #ccc;
				.ss {
					height: R(120px);
					padding: R(20px) 0;
					overflow: hidden;
					img {
						float: left;
						height: R(101px);
						margin-right: R(21px);
					}
					p:nth-of-type(1) {
						font-size: R(24px);
						margin-top: R(14px);
						margin-bottom: R(28px);
					}
					p:nth-of-type(2) {
						color: #798089;
						font-size: R(18px);
					}
				}
				.xx {
					height: R(650px);
					img {
						height: R(339px);
					}
					p:nth-of-type(1) {
						margin-top: R(28px);
						margin-bottom: R(41px);
						font-size: R(24px);
					}
					p:nth-of-type(2) {
						font-size: R(20px);
						color: #6c747e;
						margin-bottom: R(41px);
					}
					p.content{
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2; //文本行数
						overflow: hidden;
					}
					ul.xiakuang {
						height: R(42px);
						font-size: R(20px);
						li.l {
							float: left;
							color: #fc6e51;
							height: R(38px);
							line-height: R(38px);
							width: R(76px);
							text-align: center;
							border: R(2px) solid #fc6e51;
						}
						li.r {
							float: right;
							margin-left: R(40px);
							i {
								margin-right: R(8px);
							}
						}
					}
				}
			}
		}
	}
</style>