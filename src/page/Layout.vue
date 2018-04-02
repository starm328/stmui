<template>
	<div class="stm-page">
		<stm-scroll-view>
			<div class="stm-doc-title">
				布局
				<h6>基础用法</h6>
			</div>
			<stm-flex-box wrap justifyaround :bottom="20">
					<stm-flex-item ><p>111</p></stm-flex-item>
					<stm-flex-item ><p>111</p></stm-flex-item>
					<stm-flex-item ><p>111</p></stm-flex-item>
			</stm-flex-box>
			<stm-flex-box wrap justifyaround>
					<stm-flex-item ><p>111</p></stm-flex-item>
					<stm-flex-item ><p>111</p></stm-flex-item>
			</stm-flex-box>
		</stm-scroll-view>
	</div>
</template>

<script>
export default {
	name: 'layout',
	data () {
		return {
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	p{padding:10px;background-color: #5e9fff;color: #fff;text-align: center;}
</style>
