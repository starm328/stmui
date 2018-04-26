<template>
	<button class="stm-button" :class="[{'default':type},classNames]" :style="{'background-color': bgcolor,color:color,height:size + 'px','line-height': size + 'px'}" ref="button">
			<slot></slot>
			<ripple></ripple>
	</button>
</template>

<script>
import Vue from 'vue'
import ripple from '../ripple'
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
	data () {
		return {
			tooltipTrigger: null
		}
	},
	mounted () {
		Vue.nextTick(() => {
			this.tooltipTrigger = this.$refs.button
		})
	},
	components: {
		ripple
	}
}
</script>

<style lang="css" scoped>
	button{outline: none;}
	.stm-button{background: none;border:0;width: 100%;height: 40px;line-height: 40px;position: relative;overflow: hidden;}
	.stm-button.default{background-color: #ccc;color:#fff;}
	.stm-shape-radian{border-radius:5px;}
	.stm-shape-circle{border-radius:40px;}
</style>
