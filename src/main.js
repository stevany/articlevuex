import Vue from 'vue';
import Vuex from 'vuex';
import VueBlu from 'vue-blu';
import App from './App';
import router from './router';
import store from './store';
import 'vue-material/dist/vue-material.css';
import 'vue-blu/dist/css/vue-blu.css';

Vue.use(VueMaterial)
Vue.use(VueBlu)


new Vue({
	el:'#app',
	router,
	store,
	render: h => h(App)
})