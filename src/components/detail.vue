<template>
<div>
	<breadcrumb>
	  <breadcrumb-item>
	  	<router-link to="/" exact><i class="fa fa-home"></i>Home</router-link>
	  </breadcrumb-item>
	  <breadcrumb-item label="Detail"></breadcrumb-item>

	</breadcrumb>
	<div class="field card column is-12">
		<p class="title is-3 is-spaced">
		 {{post.title}}
		</p>
		<p class="subtitle is-5">
		{{post.users?post.users.username:''}} || {{new Date(post.createdDate).toUTCString().slice(0,17)}}</p>
		<div class="field columns">
			<div class="control column is-2">Category: 
				<tag type="warning" size="default">{{post.categories?post.categories.name:''}}</tag>
			</div>
			
			<div class="column is-3 ">
				<span class="icon ">
			   	 <i class="fa fa-tag"></i>
			  	</span>
				<tag v-for=" t in post.tags" size="small" type="success" rounded >{{t}}</tag>
			</div>
		</div>

		<div v-html="post.content">
		</div>
	</div>

	<div class="columns">
		<div class="column is-11 is-offset-1"></div>
	</div>

	<transition>
		<div v-if="id?true:false">
			<Comment :id="id"></Comment>
		</div>
	</transition>


</div>

</template>
<script>
import {mapState,mapActions} from 'vuex'
import Comment from './post/comment/index.vue'
export default{
	props:['id'],
	data(){
	return{
		post:[]
	}
	},
	components:{Comment},

	computed:mapState({
		posts:store=>store.post.posts,
	}),

	mounted(){
	if(this.id){
		console.log(this.id)
		if(!this.posts.length){
			console.log('masukkk')
			this.$store.dispatch('findAllPosts')
		}
		setTimeout(()=>{
			this.post=this.posts.filter(p=> p._id===this.id)[0]},100)
	}

	}
}
</script>