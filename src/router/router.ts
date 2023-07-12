import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: () => import('./../pages/home.vue'),
		meta: {
			layout: 'MainLayout',
		},
	},
	// {
	// 	path: '/categories',
	// 	name: 'categories',
	// 	component: () => import('../views/CategoriesView.vue'),
	// 	meta: {
	// 		layout: 'DefaultLayout',
	// 	},
	// },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
