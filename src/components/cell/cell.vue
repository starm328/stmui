<template>
	<div class="stm-cell" v-if="type == 'a'" ref="button">
		<div class="stm-cell-title">
			<span class="stm-cell-text">{{text}}</span>
		</div>
		<ripple></ripple>
	</div>
	<router-link :to="href" class="stm-cell" v-else-if="type == 'link'" >
		<div ref="button">
			<div class="stm-cell-title">
				<span class="stm-cell-text">{{text}}</span>
			</div>
			<ripple></ripple>
		</div>

	</router-link>
	<div class="stm-cell" v-else>
		<div class="stm-cell-title">
			<span class="stm-cell-text">{{text}}</span>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import ripple from '../ripple'
	export default {
		name: 'cell',
		props: {
			text: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: ''
			},
			href: {
				type: [String, Object]
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
<style lang="less">
	.stm-cell {
		width: 100%;
		display: table;
		padding: 10px 15px;
		box-sizing: border-box;
		line-height: 24px;
		position: relative;
		color: #333;
		font-size: 14px;
		overflow: hidden;
		background-color: #fff;
		.stm-cell-title {
		    display: table-cell;
		}
		.stm-cell-text, .stm-cell-value {
			vertical-align: middle;
		}
	}
</style>
