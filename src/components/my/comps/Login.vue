<template>
  <div class="login">
   		<div class="zhang">
        账号
       <input type="text" placeholder="请输入11位手机号"> 
      </div>
      <div class="mi">
        密码
        <input type="password" placeholder="请输入6~20位的密码">
        <p><a href="#">忘记密码</a></p>
        <a href="#" class="denglu">登陆</a>
        <a href="#/my/register" class="zhuce">注册</a>
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
    margin-bottom: R(32px);
    input{
      outline: none;
      border: 0;
      border-left:R(4px) solid #ccc;
      /*height: R(81px);
      line-height: R(81px);*/
      margin-left: R(34px);
      width: R(500px);
    }
  }
  .mi{
    height: R(81px);
    line-height: R(81px);
    background: #fff;
    font-size: R(26px);
    padding-left: R(36px);
    input{
      outline: none;
      border: 0;
      margin-left: R(34px);
      width: R(500px);
    }
  }
  p{
    height: R(58px);
    line-height: R(58px);
    margin-bottom: R(72px);
    a{
      text-decoration: underline;
      font-size: R(26px);
    float: right;
    }
  }
  a.denglu{
    display: block;
    height: R(79px);
    line-height: r(79px);
    border: R(2px) solid #fc6e51;
    color: #fc6e51;
    text-align: center;
    margin-bottom: R(31px);
  }
  a.zhuce{
    display: block;
    height: R(79px);
    line-height: r(79px);
    border: R(2px) solid #48cfad;
    color: #48cfad;
    text-align: center;
  }
}
</style>
