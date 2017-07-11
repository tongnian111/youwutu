<template>
	<div class="qrcode">
		<div class="ma">
			<p>优物兔</p>
			<img src="http://119.29.101.67/youwutu/img/my-erweima.png">
			<p class="sao">扫一扫，快速下载</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'qrcode',
		data() {
			return {

			}
		},
		methods: {

		},
		beforeMount: function() {
			//Dom加载前自动调用

		},
		mounted: function() {
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
	.qrcode {
		flex: 1;
		overflow-y: auto;
		background: #020303;
		padding: R(20px) R(33px);
		height: R(1010px);
		.ma {
			background: #fff;
			height: R(801px);
			padding-top: R(209px);
			p {
				height: R(96px);
				line-height: R(96px);
				text-align: center;
				font-size: R(34px);
			}
			img {
				height: R(496px);
				width: R(496px);
				margin-left: R(80px);
				border: R(2px) solid #e6e9ed;
				margin-bottom: R(30px);
			}
			p.sao {
				font-size: R(24px);
				color: #656d78;
			}
		}
	}
</style>