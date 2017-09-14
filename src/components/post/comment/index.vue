<template>
<div class="control">
	
	<FormComment :id="id"></FormComment>
	<div class="column is-12"></div>
	<div class=" card column is-12">
		<ul v-model="comments">
			
			<li v-for="c in comments" :value="c._id" :key="c._id">
			<br>
			<div class="card">
				<header class="card-header">
					<p class="card-header-title">{{c.users.username}}</p>
				</header>
				<div class="card-content">
					<div class="content">says: {{c.content}}</div>	
				</div>
				<footer class="card-footer level-right">
					
					<a class="button is-danger is-active" @click="remove(c._id)">
					  <span class="icon">
					    <i class="fa fa-trash"></i>
					  </span>
					  <span>Delete</span>
					</a>
				</footer>			
			</div>
			</li>
			<br>
			
		</ul>
	</div>
</div>
</template>
<script>
import FormComment from './form.vue'
import {mapActions, mapState} from 'vuex'
export default{
	components:{FormComment},
	props:['id'],
	mounted() {
    window.addEventListener('beforeunload', this.leaving);
	},

	mounted(){
	
	this.$store.dispatch('findAllComments', this.id)
			
		
	},

	computed:mapState({
		comments:store => store.comment.comments,
		post:store=>store.post.post,
		
		
		}),
	
     

	methods:{

	 	leaving() {
            this.$store.dispatch('clearAllComments')
        },

	 	
	 	remove(id){
	 		let c={
	 			idPost:this.id,
	 			idComment:id
	 		}
	 		console.log(c)
	 		this.$store.dispatch('removeComment', c)
	 	}

		
	},
}

</script>
