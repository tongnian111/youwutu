<template>
  <div class="register">
   <h1>这是注册页面</h1>
  </div>
</template>

<script>
export default {
  name: 'register',
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

</style>
