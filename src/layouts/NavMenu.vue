<template>
  <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">    
    <el-menu-item index="1" @click="$router.push('/')">
      <antd-icon type="code-sandbox-o" class="antd-icon" />
      <span slot="title">Exdenten</span>
    </el-menu-item>
    <el-menu-item index="2" @click="$router.push('/')">
        <antd-icon type="home-o" class="antd-icon" />
        <span slot="title">Home</span>
    </el-menu-item>
    <el-menu-item index="3" @click="$router.push('/store')">
        <antd-icon type="shopping-o" class="antd-icon" />
        <span slot="title">Store</span>
    </el-menu-item>
    <el-menu-item index="4" @click="$router.push('/contacts')">
        <antd-icon type="contacts-o" class="antd-icon" />
        <span slot="title">Contacts</span>
    </el-menu-item>
    <el-submenu index="5">
      <template slot="title">
        <antd-icon type="user-o" class="antd-icon" />
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
};
</script>

<style>
.el-menu-vertical-demo {
  width: 11rem;
}

.antd-icon {
  margin-left: 6px;
  margin-right: 6px;
}
</style>
