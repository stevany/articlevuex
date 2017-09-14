import Vue      from 'vue'
import Router   from 'vue-router'
Vue.use(Router)

export default new Router({
	mode:'history',
	routes:[
		//404 page
		{	path:'*',
			name:"bug",
			component:require('./components/404.vue')
		},
		//router page
		{	path:'/',
			name:"index",
			component:require('./components/index.vue')
		},
		{	path:'/view/id/:id',
			name:"viewPost",
			component:require('./components/detail.vue'),
			props:true
		},
		
	]
	})
