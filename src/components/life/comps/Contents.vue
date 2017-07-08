<template>
  <div id="contents">
   		生活页面
  </div>
</template>

<script>
export default {
  name: 'integral',
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
@charset "utf-8";
$ui-width:720px;
@function R($px) {
    @return $px/$ui-width*7.2rem;
}
#contents{
	flex: 1;
	overflow-y: auto;
}
</style>
