<template>
	<div class="copyright">
		<icon v-if="icon" :value="icon"></icon>
		<p>Copyright © {{text}}</p>
	</div>
</template>

<script>
import icon from './icon/icon'
export default {
	name: 'copyright',
	props: {
		text: {
			type: String,
			default: ''
		},
		icon: {
			type: String,
			default: ''
		}
	},
	components: {
		icon,
	}

}
</script>

<style lang="less">
@import './utils/_vars.less';
	.copyright{
		text-align: center;
		color:@999;
		font-size:13px;
	}
</style>
