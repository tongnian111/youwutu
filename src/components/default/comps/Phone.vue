<template>
  <div class="phone">
   		手机页面
  </div>
</template>

<script>
export default {
  name: 'phone',
  data () {
    return {
     
    }
  },
  methods:{
  	
  },beforeMount:function(){
  	//Dom加载前自动调用
  	console.log("beforeMount")
  },mounted:function(){
  	//Dom加载完成自动调用此方法
  	console.log("mounted")
  },destoryed:function(){
  		console.log("卸载手机页面")
  }
}
</script>

<style scoped lang="scss">
@charset "utf-8";
$ui-width:720px;
@function R($px) {
    @return $px/$ui-width*7.2rem;
}
.phone{
	flex: 1;
	overflow-y: auto;
}
</style>
