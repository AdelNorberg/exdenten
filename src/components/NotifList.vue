<template>
  <el-row type="flex">
    <el-col :span="6">
      <el-row justify="center" align="center">
        <div class="notif-avatar">
          <antd-icon :type="item.icon" />
        </div>
      </el-row>
    </el-col>
    <el-col :span="18">
      <el-col class="description">{{ item.description }}</el-col>
      <el-col class="time">{{ item.time }}</el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.notif-avatar {
  border-radius: 20px;
  width: 40px;
  height: 40px;
  line-height: 47px;
  background: #409EFF;
  margin-left: 1.5rem;
  color: white;
  text-align: center
}

.time {
  font-size: 12px;
  color: rgba(0,0,0,.45);
}

.description {
  margin-bottom: 7px;
}
</style>
