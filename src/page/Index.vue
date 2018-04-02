<template>
	<div class="stm-page home">
		<div class="stm-doc-title">
			<img src="../assets/logo.png">
			<p>快捷的移动Vue 组件库</p>
		</div>
		<stm-scroll-view :topHeight="190">
			<stm-fold-group title="基础" radius>
				<stm-fold-row>
					<stm-cell text="布局" type="link" href="/layout"></stm-cell>
				</stm-fold-row>
				<stm-fold-row>
					<stm-cell text="按钮" type="link" href="/button"></stm-cell>
				</stm-fold-row>
				<stm-fold-row>
					<stm-cell text="单元格" type="link" href="/layout"></stm-cell>
				</stm-fold-row>
				<stm-fold-row>
					<stm-cell text="树状" type="link" href="/Tree"></stm-cell>
				</stm-fold-row>
			</stm-fold-group>

			<stm-fold-group title="表单" radius>
				<stm-fold-row>
					<stm-cell text="复选框" type="link" href="/layout"></stm-cell>
				</stm-fold-row>
				<stm-fold-row>
					<stm-cell text="输入框" type="link" href="/layout"></stm-cell>
				</stm-fold-row>
				<stm-fold-row>
					<stm-cell text="单选框" type="link" href="/layout"></stm-cell>
				</stm-fold-row>
				<stm-fold-row>
					<stm-cell text="开关" type="link" href="/layout"></stm-cell>
				</stm-fold-row>
			</stm-fold-group>

			<stm-fold-group title="操作反馈" radius>
				<stm-fold-row>
					<stm-cell text="基础" type="link" href="/layout"></stm-cell>
				</stm-fold-row>
			</stm-fold-group>

			<stm-fold-group title="高级组件" radius>
				<stm-fold-row>
					<stm-cell text="基础" type="link" href="/layout"></stm-cell>
				</stm-fold-row>
			</stm-fold-group>

			<stm-fold-group title="业务逻辑" radius>
				<stm-fold-row>
					<stm-cell text="基础" type="link" href="/layout"></stm-cell>
				</stm-fold-row>
			</stm-fold-group>
		</stm-scroll-view>
		<stm-copyright text="starm" icon="stm"></stm-copyright>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
			size:24,
			text:'文本'
		}
	},
	beforeRouteEnter(to, from, next) {
		// 路由导航钩子，此时还不能获取组件实例 `this`，所以无法在data中定义变量（利用vm除外）
		// 参考 https://router.vuejs.org/zh-cn/advanced/navigation-guards.html
		// 所以，利用路由元信息中的meta字段设置变量，方便在各个位置获取。这就是为什么在meta中定义isBack
		// 参考 https://router.vuejs.org/zh-cn/advanced/meta.html
		if(from.name=='Layout'){
			to.meta.isBack=true;
			//判断是从哪个路由过来的，
			//如果是详情过来的，表明当前页面不需要刷新获取新数据，直接用之前缓存的数据即可
		}
		next();
	},
	activated() {
	if(!this.$route.meta.isBack || this.isFirstEnter){
		// 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据
		// 如果isFirstEnter是true，表明是第一次进入此页面或用户刷新了页面，需获取新数据

	}
		// 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
		this.$route.meta.isBack=false;
		this.isFirstEnter=false;
	},
	created() {
		this.isFirstEnter=true;
		// 只有第一次进入或者刷新页面后才会执行此钩子函数
		// 使用keep-alive后（2+次）进入不会再执行此钩子函数
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.home{padding:10px;}
</style>
