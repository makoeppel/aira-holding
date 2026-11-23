import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
	scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		return { top: 0 }
	},
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/HomeView.vue')
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('@/views/AboutView.vue')
		},
		{
			path: '/services',
			name: 'services',
			component: () => import('@/views/ServicesView.vue')
		},
		{
			path: '/projects',
			name: 'projects',
			component: () => import('@/views/ProjectsView.vue')
		},
		{
			path: '/blog',
			name: 'blog',
			component: () => import('@/views/BlogView.vue')
		},
		{
			path: '/blog/:slug',
			name: 'blogPost',
			component: () => import('@/views/BlogPostView.vue')
		},
		{
			path: '/sensor-cloud',
			name: 'sensorCloud',
			component: () => import('@/views/SensorCloudView.vue')
		},
		{
			path: '/imprint',
			name: 'imprint',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('@/views/ImprintView.vue')
		},
		{
			path: '/gep',
			name: 'gep',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('@/views/GEPView.vue')
		},
		{
			path: '/contact',
			name: 'contact',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('@/views/Contact.vue')
		},
		{
			path: '/ixon',
			name: 'ixon',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('@/views/IxonSupersetBuilder.vue')
		},
		{
			path: '/kedro',
			name: 'kedro',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('@/views/KedroVizView.vue')
		},
		{
			path: '/:pathMatch(.*)*',
			redirect: { name: 'home' }
		},
	]
})

export default router
