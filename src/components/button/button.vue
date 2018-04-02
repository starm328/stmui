<template>
	<button class="stm-button" :class="[{'default':type},classNames]" :style="{'background-color': bgcolor,color:color, height:size + 'px','line-height': size + 'px'}">
			<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'butn',
	props: {
		type:{
			type:String,
			default:''
		},
		bgcolor: {
			type:String,
			default:'#fff'
		},
		color: {
			type:String,
			default:'#000'
		},
		shape: {
			type:String,
			default:''
		},
		size: {
			type:Number,
			default:45
		}
	},
	computed: {
		classNames () {
			let obj = {}
			obj['stm-shape-' + this.shape] = true
			return obj
		}
	},
}
</script>

<style lang="css" scoped>
	button{outline: none;}
	.stm-button{background: none;border:0;width: 100%;height: 45px;line-height: 45px}
	.stm-button.default{background-color: #ccc;color:#fff;}
	.stm-shape-radian{border-radius:5px;}
	.stm-shape-circle{border-radius:40px;}
</style>
