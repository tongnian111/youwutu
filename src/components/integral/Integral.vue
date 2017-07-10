<template>
	<div id="wrapper" class="integral">
   	<TopHeader v-show="$store.state.headerIsVisible" :top_header_param="$store.state.topHeaderParam"></TopHeader>
    <router-view></router-view>
    <FooterNav v-show="$store.state.navIsVisible"></FooterNav>
	</div>
</template>

<script>

import IntegralContents from "./comps/Contents";
import Person from './comps/Person';
import Jifen from './comps/Jifen';
import Tiyan from './comps/Tiyan';
import Dingdan from './comps/Dingdan';
import TopHeader from "../../components/public/TopHeader";
import FooterNav from "../../components/public/FooterNav";
import Contents from "./comps/Contents";


export default {
  name: 'integral',
  components:{IntegralContents,Person,Jifen,Tiyan,Dingdan,TopHeader,Contents,FooterNav},
  data () {
    return {
     	
    }
  },
  methods:{
  	
  },beforeMount:function(){
  	//Dom加载前自动调用
  	
  },mounted:function(){
  	//Dom加载完成自动调用此方法
  	
  }
}
</script>

<style scoped lang="scss">

</style>
