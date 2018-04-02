<template>
	<div class="stm-page-content"  :style="{'min-height':'calc(100vh - '+ vhHeight + 'px' + ')'}">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'scrollView',
		props: {
			topHeight: {
				type:Number,
				default:0
			},
			bottomHeight: {
				type:Number,
				default:0
			}
		},
		computed: {
			vhHeight () {
				return this.topHeight + this.bottomHeight
			}
		}
	}
</script>

<style lang="less">
	*{padding:0;margin:0}
	a{text-decoration: none;}
	a:focus{outline: none;}
	html,body{background-color: #f8f8f8;font-family: Arial,Helvetica,STHeiti STXihei,Microsoft YaHei,Tohoma,sans-serif;}
</style>
