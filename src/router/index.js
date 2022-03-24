import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{path: '/', name: 'Home', component: Home},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue'),
		kids: [{path: '/blog', name: 'Blog'}],
	},
	{path: '/blog', component: () => import('../views/Blog.vue')},
	{
		path: '/work-physicals-las-cruces',
		name: 'Physicals',
		component: () => import('../views/Physicals.vue'),
		kids: [
			{name: 'Hazmat', path: '/hazmat-physical-las-cruces'},
			{name: 'Dot', path: '/dot-physical-las-cruces'},
		],
	},
	{path: '/hazmat-physical-las-cruces', component: () => import('../views/Hazmat.vue')},
	{path: '/dot-physical-las-cruces', component: () => import('../views/Dot.vue')},
	{
		path: '/drug-screening-las-cruces',
		name: 'Drug Screening',
		component: () => import('../views/DrugScreening.vue'),
	},

	{
		path: '/impairment-ratings-las-cruces',
		name: 'Impairment Ratings',
		component: () => import('../views/ImpairmentRatings.vue'),
	},
	{
		path: '/workers-comp-medical-services',
		name: "Workers' Comp",
		component: () => import('../views/WorkersComp.vue'),
	},
	{
		path: '/contact-us',
		name: 'Contact',
		component: () => import('../views/ContactUs.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
