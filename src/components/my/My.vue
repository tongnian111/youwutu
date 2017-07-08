<template>
<div id="wrapper" class="my">
    <router-view></router-view> 
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Contents from "./comps/Contents";
export default {
  name: 'my',
  components:{Contents},
  data () {
    return {
     	active: 'tab-container1',
    }
  },
  methods:{
  	
  },beforeMount:function(){
  	//Dom加载前自动调用
  	
  },mounted:function(){
  	//Dom加载完成自动调用此方法
  	
  },updated:function(){
  	console.log(this.$store.state.topHeaderParam)
  }
}
</script>

<style scoped lang="scss">
@charset "utf-8";
$ui-width:720px;
@function R($px) {
    @return $px/$ui-width*7.2rem;
}
.my{
  background: #f5f7fa;
}

</style>
