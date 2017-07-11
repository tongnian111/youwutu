<template>
	<div id="wrapper" class="default">
		<TopHeader v-show="$store.state.headerIsVisible" :top_header_param="$store.state.topHeaderParam"></TopHeader>
<<<<<<< HEAD
		<Contents></Contents>
=======
		<router-view></router-view>
>>>>>>> 63da0d448c0b8bbc0813d016d13d3908dbc8cd9c
		<FooterNav v-show="$store.state.navIsVisible"></FooterNav>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	import TopHeader from "../../components/public/TopHeader";
	import FooterNav from "../../components/public/FooterNav";
	import Contents from "./comps/Contents";
	import Phone from "./comps/Phone";
	export default {
		name: 'default',
		components: {
			TopHeader,
			Contents,
<<<<<<< HEAD
			FooterNav
=======
			FooterNav,
			Phone
>>>>>>> 63da0d448c0b8bbc0813d016d13d3908dbc8cd9c
		},
		data() {
			return {
					dataList:[]
			}
		},
		methods: {
			//	...mapActions([
			//  'addtolist',
			//	  ]),addToList:function(){
			//	  		this.addtolist(this.$refs.addtext.value);
			//	  }
			//加载数据
			loadData: function(id="342568ABB06F403EA40B3E31FFF49DA5") {
				var _this = this;
				this.$http.get('/rightbe/api/system/ishare.do?callback=&id='+id+'&[object%20Object]&_=1499476098428',{
					
				}).then(response => {
					// get body data
//					this.someData = response.body;
						console.log(JSON.parse(response.body.substring(1,response.body.length-2)))
						let itemData = JSON.parse(response.body.substring(1,response.body.length-2));
						_this.dataList = _this.dataList.concat(itemData)
				}, response => {
					// error callback
				});

			}
		},
		beforeMount: function() {
			//Dom加载前自动调用
			this.loadData()
			
		},
		mounted: function() {

		}
	}
</script>

<style scoped lang="scss">
	@charset "utf-8";
	$ui-width:720px;
	@function R($px) {
		@return $px/$ui-width*7.2rem;
	}
</style>