<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>
<!--<transition enter-active-class="animated slideInRight" leave-active-class="animated slideInLeft">-->
<script>
	export default {
		name: 'app',
		data() {
			return {

			}
		},
		beforeMount: function() {
			
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	#app {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	#wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		overflow-x: hidden;
	}
</style>