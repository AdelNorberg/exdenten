<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse">    
    <el-menu-item index="1" @click="$router.push('/')">
      <i class="el-icon-star-off"></i>
      <span slot="title">Exdenten</span>
    </el-menu-item>
    <el-menu-item index="2" @click="$router.push('/')">
        <i class="el-icon-menu"></i>
        <span slot="title">Home</span>
    </el-menu-item>
    <el-menu-item index="3" @click="$router.push('/about')">
        <i class="el-icon-goods"></i> 
        <span slot="title">Store</span>
    </el-menu-item>
    <el-menu-item index="4" @click="$router.push('/contacts')">
        <i class="el-icon-document"></i>
        <span slot="title">Contacts</span>
    </el-menu-item>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span slot="title">Account</span>
      </template>
      <el-menu-item index="1-1" @click="$router.push('/account-center')">
        Account center
      </el-menu-item>
      <el-menu-item index="1-2" class="menu-item-logo" @click="$router.push('/account-settings')">
        Account settings
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  props: {
    isCollapse: Boolean
  }
}
</script>

<style>
.el-menu-vertical-demo {
  width: 11rem;
}
</style>
