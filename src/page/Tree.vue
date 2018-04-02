<template>
	<div class="stm-page tree">
		<stm-scroll-view :bottomHeight="20">
			<div class="stm-doc-title">
				树状
				<h6>基础用法</h6>
			</div>
			<stm-tree  style="background:#5e9fff;color:#fff;">
				<div slot="left">左边</div>
				<div slot="left">左边</div>
				<div slot="left">左边</div>
				<stm-icon value="3d_rotation" slot="content"></stm-icon>
				<div slot="right">左边</div>
				<div slot="right">左边</div>
				<div slot="right">左边</div>
			</stm-tree>
		</stm-scroll-view>
		<stm-copyright text="starm" icon="stm"></stm-copyright>
	</div>
</template>

<script>
export default {
	name: 'tree',
	data () {
		return {
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
