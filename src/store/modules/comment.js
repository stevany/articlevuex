'use strict';
import * as types from '../types';
import axios from 'axios';

const store={
	state:{
			comments:[],
			comment:{
				
				_id:0,
				name:''
			},
			listComments:[]
		},

	mutations:{
			[types.GET_COMMENTS](state, data){
				state.comments=data
				state.listComments=data

			},
			
			
			[types.ADD_COMMENT](state, data){
				console.log(data)
				state.comments=state.comments.concat(data)
				state.listComments=state.listComments.concat(data)
				state.comment=data

			},
			
			[types.DELETE_COMMENT](state, id){
				const comment=state.listComments.filter(c => c._id !== id)
				state.comments=comment
				state.listComments=comment

		
			},
			[types.CLEAR_COMMENT](state){
				state.comment={
					_id:0,
					name:''
				}
			},
			[types.CLEAR_ALL_COMMENTS](state){
				state.Comments=[]
				state.listcomments=[]
				state.comment=[]
			}


		},
	actions:{

			findAllComments({ commit }, id ){
				return axios.get(types.API_URL+'/post/id/'+ id + '/comments')
				.then(response => {
					 console.log(response.data.data)
					 commit(types.GET_COMMENTS,response.data.data);
				})
				 .catch(function (error) {
				 	console.log(error)
				 })
				
			},
			
			
			clearComment({commit}){
				return commit(types.CLEAR_COMMENT)
			},
			addComment({commit}, data){


				return fetch(types.API_URL + '/post/id/'+ data.posts._id + '/comment',{
					method:'POST',
					headers:{
						'Accept' : 'application/json',
						'Content-Type':'application/json'
					},
					body:JSON.stringify(data)
				}).then(response=>{response.json().then(json=>{
				
					commit(types.ADD_COMMENT, json.data)
					})
				})
				.catch(error =>{
					console.log(error)
				})
			},
			
			removeComment({commit}, data){
		
				return fetch(types.API_URL +  '/post/idpost/'+ data.idPost +  '/comment/idcomment/' +data.idComment,{
					method:'delete',
					headers:{
						'Accept' : 'application/json',
						'Content-Type':'application/json'
					}
				}).then(response => {
					 commit(types.DELETE_COMMENT,data.idComment)
					 commit(types.CLEAR_COMMENT)
				})
			},
			clearAllComments({commit}){
				commit(types.CLEAR_ALL_COMMENTS)
			}
		},

	
	}
export default store
