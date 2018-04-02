<template>
	<div class="stm-page button">
		<stm-scroll-view>
			<div class="stm-doc-title">
				按钮
				<h6>基础用法</h6>
			</div>
			<stm-button type="default" >按钮</stm-button>
			<stm-button type="default" bgcolor="red" color="#fff" :size="40">按钮</stm-button>
			<stm-button type="default" bgcolor="red" color="#fff" :size="40" shape="radian">按钮</stm-button>
			<stm-button type="default" bgcolor="red" color="#fff" :size="40" shape="circle">按钮</stm-button>
			<div class="stm-doc-title">
				<h6>波紋效果</h6>
			</div>
			<stm-button-ripple type="default" bgcolor="red" color="#fff" :size="40" shape="circle">按钮</stm-button-ripple>
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
	.button{padding:0 10px;}
	.button button{margin-bottom: 10px;}
</style>
