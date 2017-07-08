<template>
	<div id="wrapper" class="default">
		<Contents></Contents>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	import Contents from "./comps/Contents";
	export default {
		name: 'default',
		components: {
			Contents
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