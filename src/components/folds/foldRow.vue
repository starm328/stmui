<template>
	<div class="stm-fold-content">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'foldRow',

	}
</script>
<style lang="less">
	.stm-fold-content {
		z-index: 0;
		height: 0;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		-webkit-transition: .3s;
		transition: .3s;
	}
	.stm-fold-open .stm-fold-content {
		height: auto;
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}
</style>
