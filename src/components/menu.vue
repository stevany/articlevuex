<template>

    <div class="menu is-light">
      <menus label="MENU">
        <menu-item icon="home">Home</menu-item>
        <menu-item icon="institution" v-if="currentUser.isMaster || currentUser.isAdmin">
            <span>Master</span>
          	<menus slot="sub">
	            <menu-item :to="{ name:'categories'}" icon="leaf"  :is-active="true">Category</menu-item>
	            <menu-item :to="{ name:'tags'}" icon="tags">Tag</menu-item>
            </menus>   
        </menu-item>

        <menu-item icon="tasks" v-if="currentUser.isTransaction || currentUser.isAdmin">
          <span>Transaction</span>
          <menus slot="sub">
            <menu-item icon="book" :to="{name:'posts'} ">Post</menu-item>
          </menus>
        </menu-item>

        <div class="divider"></div>
   		  <menu-item icon="openid" v-if="currentUser.isAdmin">
          <span>Account</span>
          <menus slot="sub">
            <menu-item :to="{name:'users'}" icon="users">User</menu-item>
            <menu-item :to="{name:'roles'}" icon="street-view">Role</menu-item>
          </menus>
        </menu-item>

        <div class="divider"></div>
        <menu-item :to="{name:'login'}" icon="sign-in">Sign-In</menu-item>
        <menu-item :to="{name:'user'}" icon="universal-access">Register</menu-item>
        <menu-item></menu-item>
        <menu-item></menu-item>
        <menu-item></menu-item>
        <menu-item></menu-item>
        <menu-item></menu-item>
        <menu-item></menu-item>
        <menu-item></menu-item>
        <menu-item></menu-item>
        <menu-item></menu-item>

        
      </menus>
     
    </div>

</template>
<script>
import {mapState} from 'vuex'
export default{
  
  computed:
  mapState({
    currentUser:store=>store.user.currentUser
  })
}
</script>