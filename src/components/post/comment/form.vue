<template>
<div class="field card column is-12 ">
	<p class="title is-4 is-spaced">
	<span class="icon is-medium">
	    <i class="fa fa-pencil"></i>
	</span>  
		Comment
	</p>

	<div class="control is-horizontal" >
		
		<div class="control">
			<textarea rows="20" class="textarea" placeholder="content"  v-model="comment.content"></textarea>
		</div>
	</div>

	<div class="control has-addons">
		<a class="button is-success" @click="processSave">
		  <span class="icon">
		    <i class="fa fa-save"></i>
		  </span>
		  <span>Submit</span>
		</a>
		<a class="button is-warning" @click="clear">
		  <span class="icon">
		    <i class="fa fa-times"></i>
		  </span>
		  <span>Cancel</span>
		</a>
			
	</div>

</div>
</template>
<script>
import {mapState,mapActions}from 'vuex'
export default{
	props:['id'],
	computed:mapState({
		comment:store=>store.comment.comment,
		post:store=>store.post.post,
		
	
		}),

	methods:{
	

	save(){
		
		this.$store.dispatch('updateComment',this.comment)
	},
	saveNew(){

		delete this.comment._id
		
		console.log(this.comment)
		this.$store.dispatch('addComment',this.comment)
	},

	processSave(e){
	
		this.$store.dispatch('findPostId',this.id)
		this.comment.posts=this.post
		console.log(this.comment)
		this.editing?this.save():this.saveNew();
	
		

	},

	clear(){
		this.$store.dispatch('clearComment')
	}

	},
	

	},
	

	
}
</script>