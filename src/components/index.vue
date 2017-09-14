<template>
	<div>
	<timeline v-model="posts">
    	<timeline-item v-for="c in posts" type="success">
    		{{c.createdDate}}
    		<p class="title is-3 is-spaced">
				<router-link :to="{name:'viewPost', params:{id:c._id} }">{{c.title}}</router-link>
			</p>
    		<p class="subtitle is-4">{{c.users.username}}</p>
			<div class="field columns">
				<div class="control column is-2">Category: 
					<tag type="warning" size="default">{{c.categories.name}}</tag>
				</div>
				
				<div class="column is-2">
					<span class="icon ">
				   	 <i class="fa fa-tag"></i>
				  	</span>
					<tag v-for=" t in c.tags" size="small" type="success" rounded >{{t}}</tag>
				</div>
			</div>
			<div v-html="c.content.slice(0,100)">
			</div>
			
		</timeline-item>
	
	</timeline>
	
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex';
export default{

	computed:mapState({
		posts:store => store.post.posts,
		
		}),
	created(){
		this.$store.dispatch('findAllPosts')
	},
	methods:{

	}
	
	
}
</script>
