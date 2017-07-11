<template>
  <div id="contents">
  	<div id="topheader">
		<div class="item">
			<a class="href left_icon" @click="$router.go(-1)">
				<i class="iconfont icon-fanhui"></i>
			</a>
		</div>
		<div class="item">
			<a class="href">
				<input type="text" v-model="keyWord" placeholder="请输入关键字" />
			</a>
		</div>
		<div class="item">
			<!--top_header_param[2].route-->
			<a class="href right_icon">
				<span>搜索</span>
			</a>
		</div>
	</div>
		<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'default',
  data () {
    return {
     	keyWord:''
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
	
	#topheader {
		width: 100%;
		height: R(100px);
		background-color: #FC6E51;
		box-sizing: border-box;
		padding: 0 R(38px);
		display: flex;
		.item {
			flex: 1;
			height: inherit;
			input[type=text]{
				outline: none;
				background: white;
				height: R(60px);
				border: none;
			}
			.href {
				display: block;
				height: inherit;
				width: inherit;
				color: white;
				text-align: center;
				font-size: R(45px);
				line-height: R(100px);
			}
			.iconfont {
				font-size: R(45px);
			}
			.left_icon {
				text-align: left;
			}
			.right_icon {
				text-align: right;
			}
		}
	}
	#contents {
		flex: 1;
		overflow-y: auto;
	}
</style>
