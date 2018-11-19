<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse"> 
    <el-menu-item index="1" @click="onClickPath('/')">
        <i class="el-icon-menu"></i>
        <span slot="title">Home</span>
    </el-menu-item>
    <el-menu-item index="2" @click="onClickPath('/about')">
        <i class="el-icon-goods"></i> 
        <span slot="title">Store</span>
    </el-menu-item>
    <el-menu-item index="3" @click="onClickPath('/contacts')">
        <i class="el-icon-document"></i>
        <span slot="title">Contacts</span>
    </el-menu-item>
    <el-menu-item index="4" @click="onClickPath('/settings')">
        <i class="el-icon-setting"></i>
        <span slot="title">Account</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  props: {
    isCollapse: Boolean
  },
  methods: {
    onClickPath(path) {
      this.$router.push(path)
    }
  }
}
</script>