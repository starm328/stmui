<template>
	<div class="stm-fold-group stm-fold-shadow " :class="[{'stm-fold-open': isShow},{'stm-fold-radius': radius}]">
		<div class="stm-fold-title" @click="showToggle">
			<span class="stm-fold-texdt">{{title}}</span>
		</div>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'foldGroup',
	props: {
		title: {
			type: String,
			default: ''
		},
		radius: {
			type:Boolean,
			default:false
		}
	},
	data () {
		return {
			isShow:false
		}
	},
	methods: {
		showToggle () {
			this.isShow = !this.isShow
		}
	}
}
</script>
<style lang="less" scoped>
	.stm-fold-group{
		border-radius: inherit;
		background-color: #fff;
		position: relative;
		overflow: hidden;
		margin-bottom:15px;
		.stm-fold-title {
			font-size: 16px;
			color: #333;
			line-height: 56px;
			position: relative;
			-webkit-user-select: none;
			user-select: none;
			padding-left: 15px;
			z-index: 1;
			background-color: #fff;
			-webkit-transition: opacity .3s;
			transition: opacity .3s;
		}

	}
	.stm-fold-radius{border-radius:5px}
	.stm-fold-shadow{
		box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
	}
	.stm-fold-open{
		.stm-fold-title{
			color:#999
		}
	}
</style>
