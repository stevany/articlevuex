'use strict';
import * as types from '../types';
import axios from 'axios';

const store={
	state:{
		posts:[],
		
		listPosts:[],
		listPost:[],
		
		
},

	mutations:{
			
			
			[types.GET_POSTS](state, data){
					 
				state.posts=state.listPosts.reverse()
				state.postServer=data
				console.log(data)
				state.listTag=data.tags
				
				console.log(state.pagination)
				state.pagination.size=data.length

			},

			
		},
	actions:{

			findAllPosts({ commit } ){
				return axios.get(types.API_URL+'/posts')
				.then(response => {
					 commit(types.SET_TAGS_ARRAY, response.data.data)
					 commit(types.GET_POSTS,response.data.data);
				})
				 .catch(function (error) {
				 	console.log(error)
				 })
				
			}	
	
	}
export default store

