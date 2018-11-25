<template>
  <el-card shadow="never">
    <div class="header">
      <h1>{{ data.name }}</h1>
    </div>
    <div class="statistic">
      <div class="item" v-for="(item, key) in data.items" :key="key">
        {{ item }}
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>

<style scoped>

.header {
  
}

.statistic {
  height: 10rem;
}

</style>
