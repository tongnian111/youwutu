<template>
  <div class="login">
   		<div class="zhang">
        账号
       <input type="text" placeholder="请输入11位手机号"> 
      </div>
      <div class="mi">
        <p>密码</p>
        <input type="password" placeholder="请输入6~20位的密码">
      </div>
  </div>
</template>

<script>
export default {
  name: 'login',
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
.login{
  padding: R(82px) R(32px) R(0px) R(32px);
  .zhang{
    height: R(81px);
    line-height: R(81px);
    background: #fff;
    font-size: R(26px);
    padding-left: R(36px);
  }
}
</style>
