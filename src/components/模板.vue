<template>
  <div class="default">
   
  </div>
</template>

<script>
export default {
  name: 'default',
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
