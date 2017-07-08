<template>
 	<div id="app">
 		<TopHeader v-show="headerIsVisible" :top_header_param="$store.state.topHeaderParam"></TopHeader>
 		<!--<transition enter-active-class="animated slideInRight" leave-active-class="animated">-->
 		<router-view></router-view>
 		<!--</transition>-->
 		<FooterNav v-show="navIsVisible"></FooterNav>
 	</div>
</template>
<!--<transition enter-active-class="animated slideInRight" leave-active-class="animated slideInLeft">-->
<script>
import { mapGetters, mapActions } from 'vuex';
import TopHeader from "./components/public/TopHeader";
import FooterNav from "./components/public/FooterNav";
export default {
  name: 'app',
  components:{TopHeader,FooterNav},
  data(){
  	return {
  		headerIsVisible:true,
  		navIsVisible:true,
  	}
  },
  beforeMount:function(){
	let pathname = this.$route.name.toLowerCase();
	console.log(pathname)
	switch (pathname){
		case '':this.setFooterNavIndex(1)
			break;
		case 'lifecontents':this.setFooterNavIndex(2)
			break;
		case 'integralcontents':this.setFooterNavIndex(3)
			break;
		case 'mycontents':this.setFooterNavIndex(4)
			break;
	}
  },
  methods:{
  	...mapActions([
    'footerNavIndex',
	  ]),setFooterNavIndex:function(index){
  		this.footerNavIndex({navIndex:index});
  	}
  }
}
</script>

<style scoped lang="scss">
#app{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}
#wrapper{
	width: 100%;
	flex: 1;
	overflow-y:auto;
}
</style>
