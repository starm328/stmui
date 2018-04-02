<template>
	<div id="app">
		<keep-alive>
			<router-view/>
		</keep-alive>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style lang="less">
	.stm-doc-title{
			text-align:center;
			padding:20px;
		img{width: 110px}
		p{font-size:14px;color:#455a64;line-height: 40px;}
		h6{text-align:left;font-weight:normal;color:#999;font-size:14px}
	}
</style>
