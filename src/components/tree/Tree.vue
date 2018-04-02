<!-- 树状组件组件 -->
<template>
	<div class="stm-tree">
		<!-- 左边内容 -->
		<div class="tree-left">
			<slot name="left"></slot>
		</div>
		<!-- 中间图标 -->
		<slot name="content"></slot>
		<!-- 右边内容 -->
		<div class="tree-right">
			<slot name="right"></slot>
		</div>
	</div>
</template>
<script>
	export default{
	}
</script>
<style lang='less'>
/*
	线条颜色
*/
@linecolor: #fff;
	.stm-tree{display: flex;justify-content:center;align-items: center;
		i{margin:0 10px;}
		div{line-height: 27px;
			*{position: relative;height: 29px;font-size:14px;
				&::after{
					background:@linecolor;
					position: absolute;
					content: '';
				}
				&::before{
					background:@linecolor;
					position: absolute;
					content: '';
				}
			}
			&:first-child{
				*{position: relative;padding-right: 10px}
				*:only-child{
					&::after {
						display: none;
					}
					&::before {
						display: none;
					}
				}
				*:not(:first-child):not(:last-child){
					&::after {
						right: -5px;
						width: 10px;
						height: 1px;
						top:14px;
					}
					&::before {
						right: -5px;
						width: 1px;
						height: 29px;
						top:0px;
					}
				}
				*:first-child{
					&::after {
						right: -5px;
						width: 10px;
						height: 1px;
						top:14px;
					}
					&::before {
						right: -5px;
						width: 1px;
						height: 14px;
						top:15px;
						text-align: right;
					}
				}
				*:last-child{
					&::after {
						right: -5px;
						width: 10px;
						height: 1px;
						bottom:14px;
					}
					&::before {
						right: -5px;
						width: 1px;
						height: 14px;
						bottom:15px;
						text-align: right;
					}
				}
			}
			&:last-child{
				*{position: relative;padding-left: 10px;
					&:not(:first-child):not(:last-child){
						&::after {
							left: -5px;
							width: 10px;
							height: 1px;
							top:14px;
						}
						&::before {
							left: -5px;
							width: 1px;
							height: 29px;
							top:0px;
						}
					}
				}
				*:only-child{
					&::after {
						display: none;
					}
					&::before {
						display: none;
					}
				}
				*:last-child{
					&::after {
						left: -5px;
						width: 10px;
						height: 1px;
						bottom:14px;
					}
					&::before {
						left: -5px;
						width: 1px;
						height: 14px;
						bottom:15px;
						text-align: right;
					}
				}
				*:first-child{
					&::after {
						left: -5px;
						width: 10px;
						height: 1px;
						top:14px;
					}
					&::before {
						left: -5px;
						width: 1px;
						height: 14px;
						top:15px;
						text-align: right;
					}
				}
			}
		}
	}

</style>
