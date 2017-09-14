<template>

<div style="float:right">
	<a class="button is-success" @click="logout">
		<span class="icon">
		<i class="fa fa-sign-out"></i></span>
		<span>Logout</span>
	</a>
</div>
</template>
<script>
export default{

	methods:{

		logout(){
		
			this.$store.dispatch('clearAllCategories')
			this.$store.dispatch('clearAllUsers')
			this.$store.dispatch('clearAllRoles')
			this.$router.push({ name: 'login' });
			}
		}
	}

</script>