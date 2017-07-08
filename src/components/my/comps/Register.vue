<template>
  <div class="register">
    <div class="shang1">
      &nbsp;
      <input type="text" placeholder="请输入11位手机号">
    </div>
    <div class="shang2">
      &nbsp;
      <input type="text" placeholder="请输入验证码">
      <a href="#">获取验证码</a>
    </div>
    <div class="shang3">
      &nbsp;
      <input type="text" placeholder="请输入昵称(10个字符以内)">
    </div>
    <div class="shang4">
      &nbsp;
      <input type="password" placeholder="请输入6~20位数字或字母密码">
    </div>
    <div class="shang5">
      &nbsp;
      <a href="#">完成</a>
    </div>
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
@charset "utf-8";
$ui-width:720px;
@function R($px) {
    @return $px/$ui-width*7.2rem;
}
.register{
  padding: R(82px) R(32px) R(0px) R(32px);
  div{
    height: R(81px);
    line-height: R(81px);
    background: #fff;
    font-size: R(26px);
    padding-left: R(21px);
    margin-bottom: R(21px);
    input{
      outline: none;
      border: 0;
      /*border-left:R(4px) solid #ccc;*/
      width: R(450px);
    }
  }
  div.shang2{
    input{
      width: R(400px);
    }
    a{
      float: right;
      height: R(79px);
      line-height: R(79px); 
      width: R(179px);
      border: R(2px) solid #fc6e51;
      text-align: center;
    }
  }
  div.shang5{
    margin-top: R(60px);
    margin-bottom: 0;
    text-align: center;
    padding:0;
    border: R(2px) solid #fc6e51;
    a{
      display: inline-block;
      color: #fc6e51;
    }
  }
  
}
</style>
