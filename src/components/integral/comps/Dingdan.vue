<template>
 <div id="contents">
    
  </div>
</template>

<script>
export default {
  name: 'dingdan',
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

  *{
    padding:0;
    margin:0;
  }
  #contents{
    flex: 1;
    overflow-y: auto;
    background:#e6e9ed;
    height: 100%;
  }
</style>
