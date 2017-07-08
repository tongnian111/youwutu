<template>
	<div id="wrapper" class="life">
   		<!--<Contents></Contents>-->
   		<router-view></router-view>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Contents from "./comps/Contents";
export default {
  name: 'life',
  components:{Contents},
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
