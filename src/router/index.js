import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import Layout from '@/page/Layout'
import Button from '@/page/Button'
import Tree from '@/page/Tree'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index,
			meta: {
				keepAlive: true,
				isBack:false
			}
		},
		{
			path: '/layout',
			name: 'Layout',
			component: Layout
		},
		{
			path: '/button',
			name: 'Button',
			component: Button
		},
		{
			path: '/tree',
			name: 'Tree',
			component: Tree
		}
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return {
				x: 0,
				y: 0
			}
		}
	}
})
