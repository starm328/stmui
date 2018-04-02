<template>
	<div class="flex-item" >
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'flexitem',

}
</script>

<style lang="css">
.flex-item{flex:1;}
</style>
