<template>
   <el-container>
    <el-header>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer>
      2018 @AdelNorberg
    </el-footer>
  </el-container>
</template>

<style lang="sass" scoped>
.el-header 
  background-color: #fff
  color: #333
  text-align: center
  line-height: 60px
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08)
  z-index: 100


.el-footer 
  background-color: #f0f2f5
  color: #333
  text-align: center
  line-height: 60px


.el-main 
  background-color: #f0f2f5
  color: #333
  text-align: center
  line-height: 160px


body > .el-container 
  min-height: 100vh

</style>
