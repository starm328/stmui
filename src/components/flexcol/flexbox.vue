<template>
		<div  class="flex-box" :style="{'margin-top':top +'px','margin-bottom':bottom +'px'}"
				:class="[
					{'flex-wrap':wrap},
					{'justify-start':justifystart},
					{'justify-end':justifyend},
					{'justify-center':justifycenter},
					{'justify-between':justifybetween},
					{'justify-around':justifyaround},
				]"

		>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'flexbox',
	props: {
		wrap: {
			type:Boolean,
			default:false
		},
		top: {
			type:Number,
			default:0
		},
		bottom: {
			type:Number,
			default:0
		},
		// 左对齐
		justifystart: {
			type:Boolean,
			default:false
		},
		// 右对齐
		justifyend: {
			type:Boolean,
			default:false
		},
		// 居中
		justifycenter: {
			type:Boolean,
			default:false
		},
		//两端对齐
		justifybetween: {
			type:Boolean,
			default:false
		},
		//间隔
		justifyaround: {
			type:Boolean,
			default:false
		}
	}
}
</script>

<style lang="css" scoped>
	.flex-box{display: flex;}
	.flex-wrap{flex-wrap: wrap;}
	.justify-start{justify-content: flex-start}
	.justify-end{justify-content: flex-end}
	.justify-center{justify-content: center}
	.justify-between{justify-content: space-between}
	.justify-around{justify-content:  space-around;}
</style>
